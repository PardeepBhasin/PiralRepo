.\teamcity\.nuget\NuGet.exe Install GitVersion.CommandLine -version 3.6.5 -OutputDirectory packages

#Gets the items and child items in one or more specified locations.
#PowerShell recurse is very powerful for searching and more. It will be generally used with get-childitem . It is also called iteration or sub-directories recursion.
$commandline = $(get-childitem .\packages -Recurse -include gitversion.exe)
Write-Host $commandline

$json = packages\gitversion.commandline.3.6.5\tools\GitVersion.exe
write-host $json