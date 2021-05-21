.\teamcity\.nuget\NuGet.exe Install GitVersion.CommandLine -version 3.6.5 -OutputDirectory packages

#Gets the items and child items in one or more specified locations.
#PowerShell recurse is very powerful for searching and more. It will be generally used with get-childitem . It is also called iteration or sub-directories recursion.
$commandline = $(get-childitem .\packages -Recurse -include gitversion.exe)
Write-Host $commandline

$json = packages\gitversion.commandline.3.6.5\tools\GitVersion.exe
#write-host $json

#The Out-String cmdlet converts the objects that PowerShell manages into an array of strings
#The ConvertFrom-Json cmdlet converts a JavaScript Object Notation (JSON) formatted string to a custom PSCustomObject object that has a property for each field in the JSON string.
$version = $json | out-string | ConvertFrom-Json
Write-Host $version
Write-Host "##teamcity[buildNumber '$($version.FullSemVer)']"