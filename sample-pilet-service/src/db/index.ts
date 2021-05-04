import { Pilet } from '../types';

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/data';
const dbName = 'store'
let db:any;
const versionPref = 'v_';
MongoClient.connect(url, { useNewUrlParser: true }, (err:any, client:any) => {
  if (err) return console.log(err)
  db = client.db(dbName);
  db.listCollections().toArray(function (err:any, names:any) {
    for(var  i = 0 ; i < names.length; i++) {
      if (names[i].name !== "pilets") {
        db.createCollection("pilets", function(err:any, res:any) {
          if (err) throw err;
          console.log("Collection created!");
        });
      }
    }
  });
  console.log(`Connected MongoDB: ${url}`)
  console.log(`Database: ${dbName}`)
})
const piletData: Record<string, Record<string, Pilet>> = {};

export async function getPilets(): Promise<Array<Pilet>> {
  const pilets: Array<Pilet> = [];

  // if (db) {
  //   const piletDataVal = await db.collection("pilets").find().toArray();
  //   piletDataVal.forEach((pilet: Object) => {
  //     Object.entries(pilet).forEach(([key, value]) => {
  //       if (!key.startsWith(versionPref)) return;
  //       pilets.push({ meta: value } as Pilet);
  //     });
  //   });
  // } else {
    Object.keys(piletData).forEach(name =>
      Object.keys(piletData[name]).forEach(version => {
        const pilet = piletData[name][version];
        pilets.push(pilet);
      }),
    );
  // }

  return pilets;
}

const getDbVersion = (version: string) => `${versionPref}${version.replace(/\./gi, '-')}`;
export async function getPilet(name: string, version: string): Promise<Pilet | undefined> {
  // if (db) {
  //   const pilet = await db.collection('pilets').findOne({name});
  //   if (pilet) {
  //     console.log("Shanktiman pilet change---------------",pilet[getDbVersion(version)]);
  //     return pilet[getDbVersion(version)]
  //   }
  // } else {
    const versions = piletData[name] || {};
    console.log("Versions-------------", versions[version]);
    return versions[version];
 // }
}

export async function setPilet(pilet: Pilet) {
  const meta = pilet.meta;
  const current = piletData[meta.name] || {};
  console.log("piletData-----------------", piletData);
  if (db) {
    // Need to upload chunks in S3 bucket pending
    //Below code responsible for storing in mongo db
    const version = getDbVersion(meta.version);
    const result = await db.collection("pilets").updateOne(
      { name: meta.name },
      {
        $set: { [version]: meta },
      },
      {
        upsert: true,
      },
    );
    console.log(`${result.upsertedCount} document(s) upserted in mongo for ${meta.name}`);
  }
  // Below code will be in else condition once chunk files will be stored in S3 bucket
  piletData[meta.name] = {
    ...current,
    [meta.version]: pilet,
  };
}
