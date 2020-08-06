import mapData from '../mapData/mapData'
const mapOptions = {
    title: {
        text: 'Worldwise Corona Cases'
    },
    subtitle: {
        text: 'Worldwise totalcases, current infected counts and total deaths till now.'
    },
    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },
    colorAxis: {
        type:'logarithm',
        min: 0,
    },
    tooltip: {
        pointFormat: '{point.name}: {point.value}<br><span style="color:gray;font-size:9px">Click for detail</span>'
    },
    series: [{
        mapData: mapData,   //static data
        name: 'Total Death Cases', // highlighted text when hovered on any country
        states: {
            // select: {
            //     color: 'green',
            //     borderColor: 'black',
            //     dashStyle: 'shortdot'
            // },
            hover: {
                color: 'red'
            }
        },
        point: {
            events: {
                // On click, look for a detailed map
                click: function () {
                    return null;
                }
                // click: function () {
                //     var key = this.key;
                //     $('#mapDropdown option').each(function () {
                //         if (this.value === 'countries/' + key.substr(0, 2) + '/' + key + '-all.js') {
                //             $('#mapDropdown').val(this.value).change();
                //         }
                //     });
                // }
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        },
        data :  // data to be changed...
        [
            // ["af", 1288]
            // ,["al", 176]
            // ,["dz", 1248]
            // ,["ad", 52]
            // ,["ao", 59]
            // ,["ag", 3]
            // ,["ar", 3979]
            // ,["am", 768]
            // ,["au", 247]
            // ,["at", 719]
            // ,["az",473]
            // ,["bs",14]
            // ,["bh",151]
            // ,["bd",3234]
            // ,["bb",7]
            // ,["by",574]
            // ,["be",9852]
            // ,["bz",2]
            // ,["bj",38]
            // ,["bt",0]
            // ,["bo",3320]
            // ,["ba",373]
            // ,["bw",2]
            // ,["br",95819]
            // ,["bn",3]
            // ,["bg",415]
            // ,["bf",54]
            // ,["bi",1]
            // ,["kh",0]
            // ,["cm",391]
            // ,["ca",9004]
            // ,["cv",26]
            // ,["cf",59]
            // ,["td",75]
            // ,["cl",9745]
            // ,["cn",4676]
            // ,["co",11315]
            // ,["km",7]
            // ,["cg",58]
            // ,["cd",215]
            // ,["cr",181]
            // ,["hr",154]
            // ,["cu",88]
            // ,["cy",19]
            // ,["cz",386]
            // ,["ci",103]
            // ,["dk",616]
            // ,["dj",59]
            // ,["dm",0]
            // ,["do",1213]
            // ,["ec",5808]
            // ,["eg",4912]
            // ,["sv",486]
            // ,["gq",83]
            // ,["er",0]
            // ,["ee",63]
            // ,["et",343]
            // ,["fj",1]
            // ,["fi",331]
            // ,["fr",30297]
            // ,["ga",51]
            // ,["gm",14]
            // ,["ge",17]
            // ,["de",9163]
            // ,["gh",191]
            // ,["gr",209]
            // ,["gd",0]
            // ,["gt",2037]
            // ,["gn",48]
            // ,["gw",27]
            // ,["gy",22]
            // ,["ht",166]
            // ,["va",0]
            // ,["hn",1400]
            // ,["hu",598]
            // ,["is",10]
            // ,["in",39795]
            // ,["id",5388]
            // ,["ir",17617]
            // ,["iq",5017]
            // ,["ie",1763]
            // ,["il",561]
            // ,["it",35171]
            // ,["jm",12]
            // ,["jp",111]
            // ,["jo",11]
            // ,["kz",1058]
            // ,["ke",388]
            // ,["kr",302]
            // ,["kw",465]
            // ,["kg",1427]
            // ,["la",0]
            // ,["lv",32]
            // ,["lb",65]
            // ,["ls",21]
            // ,["lr",78]
            // ,["ly",96]
            // ,["li",1]
            // ,["lt",80]
            // ,["lu",118]
            // ,["mk",505]
            // ,["mg",123]
            // ,["mw",128]
            // ,["my",125]
            // ,["mv",19]
            // ,["ml",124]
            // ,["mt",9]
            // ,["mr",157]
            // ,["mu",10]
            // ,["mx",48869]
            // ,["md",810]
            // ,["mc",4]
            // ,["mn",0]
            // ,["me",53]
            // ,["ma",417]
            // ,["mz",15]
            // ,["mm",6]
            // ,["na",12]
            // ,["np",58]
            // ,["nl",6170]
            // ,["nz",22]
            // ,["ni",123]
            // ,["ne",69]
            // ,["ng",910]
            // ,["no",256]
            // ,["om",421]
            // ,["pk",5999]
            // ,["ps",86]
            // ,["pa",1522]
            // ,["pg",2]
            // ,["py",59]
            // ,["pe",20007]
            // ,["ph",2115]
            // ,["pl",1738]
            // ,["pt",1739]
            // ,["qa",177]
            // ,["xk",296]
            // ,["ro",2480]
            // ,["ru",14327]
            // ,["rw",5]
            // ,["kn",0]
            // ,["lc",0]
            // ,["vc",0]
            // ,["sm",42]
            // ,["st",15]
            // ,["sa",2984]
            // ,["sn",214]
            // ,["rs",605]
            // ,["sc",0]
            // ,["sl",67]
            // ,["sg",27]
            // ,["sk",29]
            // ,["si",123]
            // ,["so",93]
            // ,["za",8884]
            // ,["ss",47]
            // ,["es",28498]
            // ,["lk",11]
            // ,["sd",763]
            // ,["sr",27]
            // ,["sz",49]
            // ,["se",5747]
            // ,["ch",1981]
            // ,["sy",46]
            // ,["tw",7]
            // ,["tj",61]
            // ,["tz",21]
            // ,["th",58]
            // ,["tl",0]
            // ,["tg",19]
            // ,["tt",8]
            // ,["tn",51]
            // ,["tr",5765]
            // ,["ug",5]
            // ,["ua",1788]
            // ,["ae",351]
            // ,["gb",46295]
            // ,["us",156862]
            // ,["uy",37]
            // ,["uz",165]
            // ,["ve",187]
            // ,["vn",8]
            // ,["eh",1]
            // ,["ye",506]
            // ,["zm",173]
            // ,["zw",81]
        ]
        // mapChart.get('us').select();
    }],
  }
export default mapOptions;