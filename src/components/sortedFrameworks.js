export default function sortedFrameworks(frameworks) {
let entries = Object.entries(frameworks)
let frameworkNames = []
for (let i=0; i<entries.length; i++) {
    if (entries[i][0]==='framework_name') {
        frameworkNames.push(entries[i][1])
    }
}
    return (
        frameworkNames
    );
}