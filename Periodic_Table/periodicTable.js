// Function for opactity of other than the reactive_nonmetal elements

function reactive_nonmetal_fun() {

   // giveColor
   for (let j = 119; j <= 236; j++) {
      document.getElementById(`${j}`).style.opacity = "1";
   }
   for (let j = 119; j <= 236; j++) {
      document.getElementById(`${j}`).style.outline = "none";
   }

   reactive_nonmetal = ["1", "6", "7", "8", "9", "15", "16", "17", "34", "35", "53"];
   for (let i = 1; i <= 118; i++) {
      atm = document.getElementById(`${i}`).textContent;
      if (reactive_nonmetal.includes(atm)) {
         console.log(atm)
         continue;
      }
      else {
         document.getElementById(`${i + 118}`).style.opacity = "0.3";
         document.getElementById(`${i + 118}`).style.boxShadow = "0px 0px transparent"
      }
   }
}
document.getElementById('119').addEventListener("click", reactive_nonmetal_fun)
document.getElementById('124').addEventListener("click", reactive_nonmetal_fun)
document.getElementById('125').addEventListener("click", reactive_nonmetal_fun)
document.getElementById('126').addEventListener("click", reactive_nonmetal_fun)
document.getElementById('127').addEventListener("click", reactive_nonmetal_fun)
document.getElementById('133').addEventListener("click", reactive_nonmetal_fun)
document.getElementById('134').addEventListener("click", reactive_nonmetal_fun)
document.getElementById('135').addEventListener("click", reactive_nonmetal_fun)
document.getElementById('152').addEventListener("click", reactive_nonmetal_fun)
document.getElementById('153').addEventListener("click", reactive_nonmetal_fun)
document.getElementById('171').addEventListener("click", reactive_nonmetal_fun)

// Function for opactity of other than the alkali_metal elements
function alkali_metal_fun() {

   // giveColor
   for (let j = 118; j <= 236; j++) {
      document.getElementById(`${j}`).style.opacity = "1";
   }
   for (let j = 119; j <= 236; j++) {
      document.getElementById(`${j}`).style.outline = "none";
   }

   alkali_metal = ["3", "11", "19", "37", "55", "87"];
   for (let i = 1; i <= 118; i++) {
      atm = document.getElementById(`${i}`).textContent;
      if (alkali_metal.includes(atm)) {
         console.log(atm)
         continue;
      }
      else {
         document.getElementById(`${i + 118}`).style.opacity = "0.3";
         document.getElementById(`${i + 118}`).style.boxShadow = "0px 0px transparent"
      }
   }
}

document.getElementById('121').addEventListener("click", alkali_metal_fun)
document.getElementById('129').addEventListener("click", alkali_metal_fun)
document.getElementById('137').addEventListener("click", alkali_metal_fun)
document.getElementById('155').addEventListener("click", alkali_metal_fun)
document.getElementById('173').addEventListener("click", alkali_metal_fun)
document.getElementById('205').addEventListener("click", alkali_metal_fun)

//Function for opactity of other than the alkali_metal elements
function alkaline_earth_metal_fun() {

   // giveColor
   for (let j = 118; j <= 236; j++) {
      document.getElementById(`${j}`).style.opacity = "1";
   }
   for (let j = 119; j <= 236; j++) {
      document.getElementById(`${j}`).style.outline = "none";
   }

   alkaline_earth_metal = ["4", "12", "20", "38", "56", "88"];
   for (let i = 1; i <= 118; i++) {
      atm = document.getElementById(`${i}`).textContent;
      if (alkaline_earth_metal.includes(atm)) {
         console.log(atm)
         continue;
      }
      else {
         document.getElementById(`${i + 118}`).style.opacity = "0.3";
         document.getElementById(`${i + 118}`).style.boxShadow = "0px 0px transparent"
      }
   }
}

document.getElementById('122').addEventListener("click", alkaline_earth_metal_fun)
document.getElementById('130').addEventListener("click", alkaline_earth_metal_fun)
document.getElementById('138').addEventListener("click", alkaline_earth_metal_fun)
document.getElementById('156').addEventListener("click", alkaline_earth_metal_fun)
document.getElementById('174').addEventListener("click", alkaline_earth_metal_fun)
document.getElementById('206').addEventListener("click", alkaline_earth_metal_fun)


//Function for opactity of other than the transition_metal elements
function transition_metal_fun() {

   // giveColor
   for (let j = 118; j <= 236; j++) {
      document.getElementById(`${j}`).style.opacity = "1";
   }
   for (let j = 119; j <= 236; j++) {
      document.getElementById(`${j}`).style.outline = "none";
   }


   transition_metal = ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
      "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "72", "73", "74", "75",
      "75", "76", "77", "78", "79", "80", "104", "105", "106", "107", "108"];
   for (let i = 1; i <= 118; i++) {
      atm = document.getElementById(`${i}`).textContent;
      if (transition_metal.includes(atm)) {
         continue;
      }
      else {
         document.getElementById(`${i + 118}`).style.opacity = "0.3";
         document.getElementById(`${i + 118}`).style.boxShadow = "0px 0px transparent"
      }
   }
}

document.getElementById('139').addEventListener("click", transition_metal_fun)
document.getElementById('140').addEventListener("click", transition_metal_fun)
document.getElementById('141').addEventListener("click", transition_metal_fun)
document.getElementById('142').addEventListener("click", transition_metal_fun)
document.getElementById('143').addEventListener("click", transition_metal_fun)
document.getElementById('144').addEventListener("click", transition_metal_fun)
document.getElementById('145').addEventListener("click", transition_metal_fun)
document.getElementById('146').addEventListener("click", transition_metal_fun)
document.getElementById('147').addEventListener("click", transition_metal_fun)
document.getElementById('148').addEventListener("click", transition_metal_fun)
document.getElementById('157').addEventListener("click", transition_metal_fun)
document.getElementById('158').addEventListener("click", transition_metal_fun)
document.getElementById('159').addEventListener("click", transition_metal_fun)
document.getElementById('160').addEventListener("click", transition_metal_fun)
document.getElementById('161').addEventListener("click", transition_metal_fun)
document.getElementById('162').addEventListener("click", transition_metal_fun)
document.getElementById('163').addEventListener("click", transition_metal_fun)
document.getElementById('164').addEventListener("click", transition_metal_fun)
document.getElementById('165').addEventListener("click", transition_metal_fun)
document.getElementById('166').addEventListener("click", transition_metal_fun)
document.getElementById('190').addEventListener("click", transition_metal_fun)
document.getElementById('191').addEventListener("click", transition_metal_fun)
document.getElementById('192').addEventListener("click", transition_metal_fun)
document.getElementById('193').addEventListener("click", transition_metal_fun)
document.getElementById('194').addEventListener("click", transition_metal_fun)
document.getElementById('195').addEventListener("click", transition_metal_fun)
document.getElementById('196').addEventListener("click", transition_metal_fun)
document.getElementById('197').addEventListener("click", transition_metal_fun)
document.getElementById('198').addEventListener("click", transition_metal_fun)
document.getElementById('222').addEventListener("click", transition_metal_fun)
document.getElementById('223').addEventListener("click", transition_metal_fun)
document.getElementById('224').addEventListener("click", transition_metal_fun)
document.getElementById('225').addEventListener("click", transition_metal_fun)
document.getElementById('226').addEventListener("click", transition_metal_fun)

//Function for opactity of other than the post-transition_metal elements

function post_transition_metal_fun() {

   // giveColor
   for (let j = 118; j <= 236; j++) {
      document.getElementById(`${j}`).style.opacity = "1";
   }
   for (let j = 119; j <= 236; j++) {
      document.getElementById(`${j}`).style.outline = "none";
   }


   post_transition_metal = ["13", "31", "49", "50", "81", "82", "83", "84", "85"];
   for (let i = 1; i <= 118; i++) {
      atm = document.getElementById(`${i}`).textContent;
      if (post_transition_metal.includes(atm)) {
         console.log(atm)
         continue;
      }
      else {
         document.getElementById(`${i + 118}`).style.opacity = "0.3";
         document.getElementById(`${i + 118}`).style.boxShadow = "0px 0px transparent"
      }
   }
}

document.getElementById('131').addEventListener("click", post_transition_metal_fun)
document.getElementById('149').addEventListener("click", post_transition_metal_fun)
document.getElementById('167').addEventListener("click", post_transition_metal_fun)
document.getElementById('168').addEventListener("click", post_transition_metal_fun)
document.getElementById('199').addEventListener("click", post_transition_metal_fun)
document.getElementById('200').addEventListener("click", post_transition_metal_fun)
document.getElementById('201').addEventListener("click", post_transition_metal_fun)
document.getElementById('202').addEventListener("click", post_transition_metal_fun)
document.getElementById('203').addEventListener("click", post_transition_metal_fun)


//Function for opactity of other than the metalloid elements

function metalloid_fun() {

   // giveColor
   for (let j = 118; j <= 236; j++) {
      document.getElementById(`${j}`).style.opacity = "1";
   }
   for (let j = 119; j <= 236; j++) {
      document.getElementById(`${j}`).style.outline = "none";
   }


   metalloid = ["5", "14", "32", "33", "51", "52"];
   for (let i = 1; i <= 118; i++) {
      atm = document.getElementById(`${i}`).textContent;
      if (metalloid.includes(atm)) {
         console.log(atm)
         continue;
      }
      else {
         document.getElementById(`${i + 118}`).style.opacity = "0.3";
         document.getElementById(`${i + 118}`).style.boxShadow = "0px 0px transparent"
      }
   }
}

document.getElementById('123').addEventListener("click", metalloid_fun)
document.getElementById('132').addEventListener("click", metalloid_fun)
document.getElementById('150').addEventListener("click", metalloid_fun)
document.getElementById('151').addEventListener("click", metalloid_fun)
document.getElementById('169').addEventListener("click", metalloid_fun)
document.getElementById('170').addEventListener("click", metalloid_fun)


//Function for opactity of other than the noble_gas elements

function noble_gas_fun() {

   // giveColor
   for (let j = 118; j <= 236; j++) {
      document.getElementById(`${j}`).style.opacity = "1";
   }
   for (let j = 119; j <= 236; j++) {
      document.getElementById(`${j}`).style.outline = "none";
   }

   noble_gas = ["2", "10", "18", "36", "54", "86"];
   for (let i = 1; i <= 118; i++) {
      atm = document.getElementById(`${i}`).textContent;
      if (noble_gas.includes(atm)) {
         console.log(atm)
         continue;
      }
      else {
         document.getElementById(`${i + 118}`).style.opacity = "0.3";
         document.getElementById(`${i + 118}`).style.boxShadow = "0px 0px transparent"
      }
   }
}

document.getElementById('120').addEventListener("click", noble_gas_fun)
document.getElementById('128').addEventListener("click", noble_gas_fun)
document.getElementById('136').addEventListener("click", noble_gas_fun)
document.getElementById('154').addEventListener("click", noble_gas_fun)
document.getElementById('172').addEventListener("click", noble_gas_fun)
document.getElementById('204').addEventListener("click", noble_gas_fun)


//Function for opactity of other than the lanthanide elements

function lanthanide_fun() {

   // giveColor
   for (let j = 118; j <= 236; j++) {
      document.getElementById(`${j}`).style.opacity = "1";
   }
   for (let j = 119; j <= 236; j++) {
      document.getElementById(`${j}`).style.outline = "none";
   }


   lanthanide = ["57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67",
      "68", "69", "70", "71"];
   for (let i = 1; i <= 118; i++) {
      atm = document.getElementById(`${i}`).textContent;
      if (lanthanide.includes(atm)) {
         console.log(atm)
         continue;
      }
      else {
         document.getElementById(`${i + 118}`).style.opacity = "0.3";
         document.getElementById(`${i + 118}`).style.boxShadow = "0px 0px transparent"
      }
   }
}
document.getElementById('175').addEventListener("click", lanthanide_fun)
document.getElementById('176').addEventListener("click", lanthanide_fun)
document.getElementById('177').addEventListener("click", lanthanide_fun)
document.getElementById('178').addEventListener("click", lanthanide_fun)
document.getElementById('179').addEventListener("click", lanthanide_fun)
document.getElementById('180').addEventListener("click", lanthanide_fun)
document.getElementById('181').addEventListener("click", lanthanide_fun)
document.getElementById('182').addEventListener("click", lanthanide_fun)
document.getElementById('183').addEventListener("click", lanthanide_fun)
document.getElementById('184').addEventListener("click", lanthanide_fun)
document.getElementById('185').addEventListener("click", lanthanide_fun)
document.getElementById('186').addEventListener("click", lanthanide_fun)
document.getElementById('187').addEventListener("click", lanthanide_fun)
document.getElementById('188').addEventListener("click", lanthanide_fun)
document.getElementById('189').addEventListener("click", lanthanide_fun)


//Function for opactity of other than the actinide elements

function actinide_fun() {


   // giveColor
   for (let j = 118; j <= 236; j++) {
      document.getElementById(`${j}`).style.opacity = "1";
   }
   for (let j = 119; j <= 236; j++) {
      document.getElementById(`${j}`).style.outline = "none";
   }

   actinide = ["89", "90", "91", "92", "93", "94", "95", "96", "97", "97", "98",
      "99", "100", "101", "102", "103"];
   for (let i = 1; i <= 118; i++) {
      atm = document.getElementById(`${i}`).textContent;
      if (actinide.includes(atm)) {
         console.log(atm)
         continue;
      }
      else {
         document.getElementById(`${i + 118}`).style.opacity = "0.3";
         document.getElementById(`${i + 118}`).style.boxShadow = "0px 0px transparent"
      }
   }
}

document.getElementById('207').addEventListener("click", actinide_fun)
document.getElementById('208').addEventListener("click", actinide_fun)
document.getElementById('209').addEventListener("click", actinide_fun)
document.getElementById('210').addEventListener("click", actinide_fun)
document.getElementById('211').addEventListener("click", actinide_fun)
document.getElementById('212').addEventListener("click", actinide_fun)
document.getElementById('213').addEventListener("click", actinide_fun)
document.getElementById('214').addEventListener("click", actinide_fun)
document.getElementById('215').addEventListener("click", actinide_fun)
document.getElementById('216').addEventListener("click", actinide_fun)
document.getElementById('217').addEventListener("click", actinide_fun)
document.getElementById('218').addEventListener("click", actinide_fun)
document.getElementById('219').addEventListener("click", actinide_fun)
document.getElementById('220').addEventListener("click", actinide_fun)
document.getElementById('221').addEventListener("click", actinide_fun)


//Function for opactity of other than the unknown_chemical_properties elements

function unknown_chemical_properties_fun() {

   // giveColor
   for (let j = 118; j <= 236; j++) {
      document.getElementById(`${j}`).style.opacity = "1";
   }
   for (let j = 119; j <= 236; j++) {
      document.getElementById(`${j}`).style.outline = "none";
   }

   
   unknown_chemical_properties = ["109", "110", "111", "112", "113", "114",
      "115", "116", "117", "118"];
   for (let i = 1; i <= 118; i++) {
      atm = document.getElementById(`${i}`).textContent;
      if (unknown_chemical_properties.includes(atm)) {
         console.log(atm)
         continue;
      }
      else {
         document.getElementById(`${i + 118}`).style.opacity = "0.3";
         document.getElementById(`${i + 118}`).style.boxShadow = "0px 0px transparent"
      }
   }
}

document.getElementById('227').addEventListener("click", unknown_chemical_properties_fun)
document.getElementById('228').addEventListener("click", unknown_chemical_properties_fun)
document.getElementById('229').addEventListener("click", unknown_chemical_properties_fun)
document.getElementById('230').addEventListener("click", unknown_chemical_properties_fun)
document.getElementById('231').addEventListener("click", unknown_chemical_properties_fun)
document.getElementById('232').addEventListener("click", unknown_chemical_properties_fun)
document.getElementById('233').addEventListener("click", unknown_chemical_properties_fun)
document.getElementById('234').addEventListener("click", unknown_chemical_properties_fun)
document.getElementById('235').addEventListener("click", unknown_chemical_properties_fun)
document.getElementById('236').addEventListener("click", unknown_chemical_properties_fun)


document.getElementById("alkaliBtn").addEventListener("click", alkali_metal_fun)
document.getElementById("alkaliEarthBtn").addEventListener("click", alkaline_earth_metal_fun)
document.getElementById("transitionBtn").addEventListener("click", transition_metal_fun)
document.getElementById("postTransitionBtn").addEventListener("click", post_transition_metal_fun)
document.getElementById("metaloidBtn").addEventListener("click", metalloid_fun)
document.getElementById("reactive_nonmetalbtn").addEventListener("click", reactive_nonmetal_fun)
document.getElementById("nobelGasBtn").addEventListener("click", noble_gas_fun)
document.getElementById("lathanideBtn").addEventListener("click", lanthanide_fun)
document.getElementById("actinideBtn").addEventListener("click", actinide_fun)
document.getElementById("ucpBtn").addEventListener("click", unknown_chemical_properties_fun)


let reactive_nonmetal = ["1", "6", "7", "8", "9", "15", "16", "17", "34", "35", "53"];
let alkali_metal = ["3", "11", "19", "37", "55", "87"];
let alkaline_earth_metal = ["4", "12", "20", "38", "56", "88"];
let transition_metal = ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "72", "73", "74", "75","75", "76", "77", "78", "79", "80", "104", "105", "106", "107", "108"];
let post_transition_metal= ["13", "31", "49", "50", "81", "82", "83", "84", "85"];
let metalloid = ["5", "14", "32", "33", "51", "52"];
let noble_gas = ["2", "10", "18", "36", "54", "86"];
let lanthanide = ["57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71"];
let actinide = ["89", "90", "91", "92", "93", "94", "95", "96", "97", "97", "98", "99", "100", "101", "102", "103"];
let unknown_chemical_properties = ["109", "110", "111", "112", "113", "114", "115", "116", "117", "118"];



for (let i = 119; i <= 236; i++) {
   document.getElementById(`${i}`).addEventListener("click", () => {
      for (let j = 119; j <= 236; j++) {
         document.getElementById(`${j}`).style.outline = "none";
      }
      console.log(`${i}`);

      t=i-118
      if (reactive_nonmetal.indexOf(t.toString())>-1){
         document.getElementById(`${i}`).style.outline = "2px solid #0060f0";
      }
      else if (alkali_metal.indexOf(t.toString())>-1) {
         document.getElementById(`${i}`).style.outline = "2px solid #00758c";
      }
      else if (alkaline_earth_metal.indexOf(t.toString())>-1) {
         document.getElementById(`${i}`).style.outline = "2px solid #d70528";
      }
      else if (transition_metal.indexOf(t.toString())>-1) {
         document.getElementById(`${i}`).style.outline = "2px solid #6232ec";
      }
      else if (post_transition_metal.indexOf(t.toString())>-1) {
         
         document.getElementById(`${i}`).style.outline = "2px solid #002c00";

      }
      else if (metalloid.indexOf(t.toString())>-1) {
         document.getElementById(`${i}`).style.outline = "2px solid #945700"
       
      }
      else if (noble_gas.indexOf(t.toString())>-1) {
         document.getElementById(`${i}`).style.outline = "2px solid #d43c73"

      }
      else if (lanthanide.indexOf(t.toString())>-1) {
         document.getElementById(`${i}`).style.outline = "2px solid #174666"

      }
      else if (actinide.indexOf(t.toString())>-1) {
         document.getElementById(`${i}`).style.outline = "2px solid #cb4011"
      }
      else if (unknown_chemical_properties.indexOf(t.toString())>-1) {
         document.getElementById(`${i}`).style.outline = "2px solid #3f374f"
      }

   })
}

let OuterObj = {

      "h" : {
         elementName : "Hydrogen",
         elementSymbol : "(H)",
         atomNoTop : "1",
         elementType : "Reactive Non-Metals",
         atnNo : "1",
         atnMass : "1.0079 u",
         block : "s-Block",
         discover : "Henry Cavendish",
         link : "https://media3.giphy.com/media/VbQk7UzSrryWjuF7Yb/200w.webp?cid=ecf05e47gdzqltw20lyglq5996dxbl1kd1c501pkxu37q0ud&ep=v1_gifs_search&rid=200w.webp&ct=g",
         desc : "Hydrogen (H), a colourless, odourless, tasteless, flammable gaseous substance that is the simplest member of the family of chemical elements. The hydrogen atom has a nucleus consisting of a proton bearing one unit of positive electrical charge; an electron, bearing one unit of negative electrical charge, is also associated with this nucleus. Under ordinary conditions, hydrogen gas is a loose aggregation of hydrogen molecules, each consisting of a pair of atoms, a diatomic molecule, H2. The earliest known important chemical property of hydrogen is that it burns with oxygen to form water, H2O; indeed, the name hydrogen is derived from Greek words meaning “maker of water. Although hydrogen is the most abundant element in the universe (three times as abundant as helium, the next most widely occurring element), it makes up only about 0.14 percent of Earth’s crust by weight. It occurs, however, in vast quantities as part of the water in oceans, ice packs, rivers, lakes, and the atmosphere. As part of innumerable carbon compounds, hydrogen is present in all animal and vegetable tissue and in petroleum. Even though it is often said that there are more known compounds of carbon than of any other element, the fact is that, since hydrogen is contained in almost all carbon compounds and also forms a multitude of compounds with all other elements (except some of the noble gases), it is possible that hydrogen compounds are more numerous.”"

      },

       "he" : {
         elementName : "helium",
         elementSymbol : "(He)",
         atomNoTop : "2",
         elementType : "Nobel Gas",
         atnNo : "2",
         atnMass : "4.0026 u",
         block : "s-Block",
         discover : "William Ramsay, Norman Lockyer, Per Teodor Cleve, Pierre Janssen",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzR0NGM5MzQzcmRvbmpuNXd3ZnVxZTNhOWk3Nml0Zjl4bHRjbng1NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YPEXWPopZcBKiEbWgq/giphy.gif",
         desc : "Helium (He), chemical element, inert gas of Group 18 (noble gases) of the periodic table. The second lightest element (only hydrogen is lighter), helium is a colourless, odourless, and tasteless gas that becomes liquid at −268.9 °C (−452 °F). The boiling and freezing points of helium are lower than those of any other known substance. Helium is the only element that cannot be solidified by sufficient cooling at normal atmospheric pressure; it is necessary to apply pressure of 25 atmospheres at a temperature of 1 K (−272 °C, or −458 °F) to convert it to its solid form. Helium was discovered in the gaseous atmosphere surrounding the Sun by the French astronomer Pierre Janssen. That same year the English astronomer Joseph Norman Lockyer observed a yellow line in the solar spectrum that did not correspond to the known D1 and D2 lines of sodium, and so he named it the D3 line. Lockyer concluded that the D3 line was caused by an element in the Sun that was unknown on Earth; he and the chemist Edward Frankland used the Greek word for sun, hēlios, in naming the element. Ramsay obtained a sample of the uranium-bearing mineral cleveite, and, upon investigating the gas produced by heating the sample, he found that a unique bright yellow line in its spectrum matched that of the D3 line observed in the spectrum of the Sun; the new element of helium was thus conclusively identified. In 1903 Ramsay and Frederick Soddy further determined that helium is a product of the spontaneous disintegration of radioactive substances."

      },

       "li" : {
         elementName : "Lithium",
         elementSymbol : "(Li)",
         atomNoTop : "3",
         elementType : "Alkali Metal",
         atnNo : "3",
         atnMass : "6.941 u",
         block : "s-Block",
         discover : "Johan August Arfwedson",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXA3ZjBoZWprNnN1Nmd2MDZzeW56ZWJzZmszNzZqZWZ5N3pxNTlhbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/j79EOPQranA7GaBkpT/giphy.gif",
         desc : "Lithium (Li), chemical element of Group 1 (Ia) in the periodic table, the alkali metal group, lightest of the solid elements. The metal itself—which is soft, white, and lustrous—and several of its alloys and compounds are produced on an industrial scale. Discovered in 1817 by Swedish chemist Johan August Arfwedson in the mineral petalite, lithium is also found in brine deposits and as salts in mineral springs; its concentration in seawater is 0.1 part per million (ppm). Lithium is also found in pegmatite ores, such as spodumene (LiAlSi2O6) and lepidolite (of varying structure), or in amblygonite (LiAlFPO4) ores, with Li2O contents ranging between 4 and 8.5 percent. It constitutes about 0.002 percent of Earth’s crust. Until the 1990s the lithium chemical and metal market was dominated by American production from mineral deposits, but by the turn of the 21st century most production was derived from non-U.S. sources; Australia, Chile, and Portugal were the world’s largest suppliers. (Bolivia has half the world’s lithium deposits but is not a major producer of lithium.) The major commercial form is lithium carbonate, Li2CO3, produced from ores or brines by a number of different processes. Addition of hydrochloric acid (HCl) produces lithium chloride, which is the compound used to produce lithium metal by electrolysis. Lithium metal is produced by electrolysis of a fused mixture of lithium and potassium chlorides. The lower melting point of the mixture (400–420 °C, or 750–790 °F) compared with that of pure lithium chloride (610 °C, or 1,130 °F) permits lower-temperature operation of the electrolysis. "
      },

       "be" : {
         elementName : "Beryllium",
         elementSymbol : "(Be)",
         atomNoTop : "4",
         elementType : "Alkali Earth Metal",
         atnNo : "4",
         atnMass : "9.0121 u",
         block : "s-Block",
         discover : "Louis Nicolas Vauquelin",
         link : "https://i.pinimg.com/originals/2e/75/5e/2e755eaff1fd09f1b102a0a44f6ddcbd.gif",
         desc : "Beryllium (Be), formerly (until 1957) glucinium, chemical element, the lightest member of the alkaline-earth metals of Group 2 (IIa) of the periodic table, used in metallurgy as a hardening agent and in many outer space and nuclear applications. Beryllium is a steel-gray metal that is quite brittle at room temperature, and its chemical properties somewhat resemble those of aluminum. It does not occur free in nature. Beryllium is found in beryl and emerald, minerals that were known to the ancient Egyptians. Although it had long been suspected that the two minerals were similar, chemical confirmation of this did not occur until the late 18th century. Emerald is now known to be a green variety of beryl. Beryllium was discovered (1798) as the oxide by French chemist Nicolas-Louis Vauquelin in beryl and in emeralds and was isolated (1828) as the metal independently by German chemist Friedrich Wöhler and French chemist Antoine A.B. Bussy by the reduction of its chloride with potassium. Beryllium is widely distributed in Earth’s crust and is estimated to occur in Earth’s igneous rocks to the extent of 0.0002 percent. Its cosmic abundance is 20 on the scale in which silicon, the standard, is 1,000,000. The United States has about 60 percent of the world’s beryllium and is by far the largest producer of beryllium; other major producing countries include China, Mozambique, and Brazil. The extraction of beryllium is complicated by the fact that beryllium is a minor constituent in most ores (5 percent by mass even in pure beryl, less than 1 percent by mass in bertrandite) and is tightly bound to oxygen. "
      },

      "b" : {
         elementName : "Boron",
         elementSymbol : "(B)",
         atomNoTop : "5",
         elementType : "Metalloid",
         atnNo : "5",
         atnMass : "10.811 u",
         block : "p-Block",
         discover : "Humphry Davy, Joseph Louis Gay-Lussac",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGVwaWltc2o4ZmYwYThlcWppcWZscGRleXZndTJ2ejY1Mm1hY3YyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Kg1ttGFEuMc9QvuYVa/giphy-downsized-large.gif",
         desc : "Boron (B), chemical element, semimetal of main Group 13 (IIIa, or boron group) of the periodic table, essential to plant growth and of wide industrial application. Pure crystalline boron is a black, lustrous semiconductor; i.e., it conducts electricity like a metal at high temperatures and is almost an insulator at low temperatures. It is hard enough (9.3 on Mohs scale) to scratch some abrasives, such as carborundum, but too brittle for use in tools. It constitutes about 0.001 percent by weight of Earth’s crust. Boron occurs combined as borax, kernite, and tincalconite (hydrated sodium borates), the major commercial boron minerals, especially concentrated in the arid regions of California, and as widely dispersed minerals such as colemanite, ulexite, and tourmaline. Sassolite—natural boric acid—occurs especially in Italy. Boron was first isolated (1808) by French chemists Joseph-Louis Gay-Lussac and Louis-Jacques Thenard and independently by British chemist Sir Humphry Davy by heating boron oxide (B2O3) with potassium metal. The impure amorphous product, a brownish black powder, was the only form of boron known for more than a century. Pure crystalline boron may be prepared with difficulty by reduction of its bromide or chloride (BBr3, BCl3) with hydrogen on an electrically heated tantalum filament. Limited quantities of elemental boron are widely used to increase hardness in steel. Added as the iron alloy ferroboron, it is present in many steels, usually in the range 0.001 to 0.005 percent. "
      },

      "c" : {
         elementName : "Carbon",
         elementSymbol : "(C)",
         atomNoTop : "6",
         elementType : "Reactive Nonmetal",
         atnNo : "6",
         atnMass : "12.0107 u",
         block : "p-Block",
         discover : "Antoine Lavoisier",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenZvazFxZ3c3d204a2lha2hmM3loczh5eXRiaWExb2doeDhxZXkyeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Z8k6qo0AVIsPdROQNd/giphy.gif",
         desc : "Carbon (C), nonmetallic chemical element in Group 14 (IVa) of the periodic table. Although widely distributed in nature, carbon is not particularly plentiful—it makes up only about 0.025 percent of Earth’s crust—yet it forms more compounds than all the other elements combined. In 1961 the isotope carbon-12 was selected to replace oxygen as the standard relative to which the atomic weights of all the other elements are measured. Carbon-14, which is radioactive, is the isotope used in radiocarbon dating and radiolabeling. On a weight basis, carbon is 19th in order of elemental abundance in Earth’s crust, and there are estimated to be 3.5 times as many carbon atoms as silicon atoms in the universe. In the crust of Earth, elemental carbon is a minor component. However, carbon compounds (i.e., carbonates of magnesium and calcium) form common minerals (e.g., magnesite, dolomite, marble, or limestone). Coral and the shells of oysters and clams are primarily calcium carbonate. Carbon is widely distributed as coal and in the organic compounds that constitute petroleum, natural gas, and all plant and animal tissue. A natural sequence of chemical reactions called the carbon cycle—involving conversion of atmospheric carbon dioxide to carbohydrates by photosynthesis in plants, the consumption of these carbohydrates by animals and oxidation of them through metabolism to produce carbon dioxide and other products, and the return of carbon dioxide to the atmosphere—is one of the most important of all biological processes."
      },

      "n" : {
         elementName : "Nitrogen",
         elementSymbol : "(N)",
         atomNoTop : "7",
         elementType : "Reactive Nonmetal",
         atnNo : "7",
         atnMass : "14.0067 u",
         block : "p-Block",
         discover : "Daniel Rutherford",
         link : "https://i.pinimg.com/originals/6d/eb/60/6deb60c969d800e21e2ed0406e1eef4d.gif",
         desc : "Nitrogen (N), nonmetallic element of Group 15 [Va] of the periodic table. It is a colourless, odourless, tasteless gas that is the most plentiful element in Earth’s atmosphere and is a constituent of all living matter. About four-fifths of Earth’s atmosphere is nitrogen, which was isolated and recognized as a specific substance during early investigations of the air. Carl Wilhelm Scheele, a Swedish chemist, showed in 1772 that air is a mixture of two gases, one of which he called “fire air,” because it supported combustion, and the other “foul air,” because it was left after the “fire air” had been used up. The “fire air” was, of course, oxygen and the “foul air” nitrogen. At about the same time, nitrogen also was recognized by a Scottish botanist, Daniel Rutherford (who was the first to publish his findings), by the British chemist Henry Cavendish, and by the British clergyman and scientist Joseph Priestley, who, with Scheele, is given credit for the discovery of oxygen. Later work showed the new gas to be a constituent of nitre, a common name for potassium nitrate (KNO3), and, accordingly, it was named nitrogen by the French chemist Jean-Antoine-Claude Chaptal in 1790. Nitrogen first was considered a chemical element by Antoine-Laurent Lavoisier, whose explanation of the role of oxygen in combustion eventually overthrew the phlogiston theory, an erroneous view of combustion that became popular in the early 18th century. The inability of nitrogen to support life (Greek: zoe) led Lavoisier to name it azote, still the French equivalent of nitrogen."
      },


      "o" : {
         elementName : "Oxygen",
         elementSymbol : "(O)",
         atomNoTop : "8",
         elementType : "Reactive Nonmetal",
         atnNo : "8",
         atnMass : "15.999 u",
         block : "p-Block",
         discover : "Antoine Lavoisier, Joseph Priestley, Carl Scheele",
         link : "https://media1.giphy.com/media/W2KU5PKZJHnbF4pwc2/giphy.gif?cid=6c09b9529vbltm4njcacrkun9byhkm23swp5lynniahtpq8o&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
         desc : "Oxygen (O), nonmetallic chemical element of Group 16 (VIa, or the oxygen group) of the periodic table. Oxygen is a colourless, odourless, tasteless gas essential to living organisms, being taken up by animals, which convert it to carbon dioxide; plants, in turn, utilize carbon dioxide as a source of carbon and return the oxygen to the atmosphere. Oxygen was discovered about 1772 by a Swedish chemist, Carl Wilhelm Scheele, who obtained it by heating potassium nitrate, mercuric oxide, and many other substances. An English chemist, Joseph Priestley, independently discovered oxygen in 1774 by the thermal decomposition of mercuric oxide and published his findings the same year, three years before Scheele published. Oxygen forms compounds by reaction with practically any other element, as well as by reactions that displace elements from their combinations with each other; in many cases, these processes are accompanied by the evolution of heat and light and in such cases are called combustions. Its most important compound is water.  In 1775–80, French chemist Antoine-Laurent Lavoisier, with remarkable insight, interpreted the role of oxygen in respiration as well as combustion, discarding the phlogiston theory, which had been accepted up to that time; he noted its tendency to form acids by combining with many different substances and accordingly named the element oxygen (oxygène) from the Greek words for “acid former.” Below −183 °C (−297 °F), oxygen is a pale blue liquid; it becomes solid at about −218 °C (−361 °F). Pure oxygen is 1.1 times heavier than air."
      },

      "f" : {
         elementName : "Fluorine",
         elementSymbol : "(F)",
         atomNoTop : "9",
         elementType : "Reactive Nonmetal",
         atnNo : "9",
         atnMass : "18.9984 u",
         block : "p-Block",
         discover : "Henri Moissan",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjZzZWh4czA4dHR5Zm05NDJyaDJrMWh1M3N0ZnV4cHVxdzV5czhhcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Xf1zV6oOrMs0vMDz7V/giphy-downsized-large.gif",
         desc : "Fluorine (F), most reactive chemical element and the lightest member of the halogen elements, or Group 17 (Group VIIa) of the periodic table. Its chemical activity can be attributed to its extreme ability to attract electrons (it is the most electronegative element) and to the small size of its atoms. The fluorine-containing mineral fluorspar (or fluorite) was described in 1529 by the German physician and mineralogist Georgius Agricola. It appears likely that crude hydrofluoric acid was first prepared by an unknown English glassworker in 1720. In 1771 the Swedish chemist Carl Wilhelm Scheele obtained hydrofluoric acid in an impure state by heating fluorspar with concentrated sulfuric acid in a glass retort, which was greatly corroded by the product; as a result, vessels made of metal were used in subsequent experiments with the substance. The nearly anhydrous acid was prepared in 1809, and two years later the French physicist André-Marie Ampère suggested that it was a compound of hydrogen with an unknown element, analogous to chlorine, for which he suggested the name fluorine. Fluorspar was then recognized to be calcium fluoride. The isolation of fluorine was for a long time one of the chief unsolved problems in inorganic chemistry, and it was not until 1886 that the French chemist Henri Moissan prepared the element by electrolyzing a solution of potassium hydrogen fluoride in hydrogen fluoride. He received the 1906 Nobel Prize for Chemistry for isolating fluorine.  Indeed, up to the time of World War II the element appeared to be a laboratory curiosity. "
      },

      "ne" : {
         elementName : "Neon",
         elementSymbol : "(N)",
         atomNoTop : "10",
         elementType : "Nobel Gas",
         atnNo : "10",
         atnMass : "20.1797 u",
         block : "p-Block",
         discover : "William Ramsay, Morris Travers",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmJ0bHp4eGEycWJzeGJmbnk0b3d5ZzR1OWpsdjVzZXRvN3dmcGNvdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RlkGseHejYcThFUpWx/giphy.gif",
         desc : "Neon (Ne), chemical element, inert gas of Group 18 (noble gases) of the periodic table, used in electric signs and fluorescent lamps. Colourless, odourless, tasteless, and lighter than air, neon gas occurs in minute quantities in Earth’s atmosphere and trapped within the rocks of Earth’s crust. Though neon is about 31/2 times as plentiful as helium in the atmosphere, dry air contains only 0.0018 percent neon by volume. This element is more abundant in the cosmos than on Earth. Neon liquefies at −246.048 °C (−411 °F) and freezes at a temperature only 21/2° lower. When under low pressure, it emits a bright orange-red light if an electrical current is passed through it. This property is utilized in neon signs (which first became familiar in the 1920s), in some fluorescent and gaseous conduction lamps, and in high-voltage testers. The name neon is derived from the Greek word neos, “new.” . Neon was discovered (1898) by the British chemists Sir William Ramsay and Morris W. Travers as a component of the most volatile fraction of liquefied crude argon obtained from air. It was immediately recognized as a new element by its unique glow when electrically stimulated. Its only commercial source is the atmosphere, in which it is 18 parts per million by volume. Because its boiling point is −246 °C (−411 °F), neon remains, along with helium and hydrogen, in the small fraction of air that resists liquefaction upon cooling to −195.8 °C (−320.4 °F, the boiling point of liquid nitrogen).  Processing 88,000 pounds of liquid air will produce one pound of neon."
      },

      "na" : {
         elementName : "Sodium",
         elementSymbol : "(Na)",
         atomNoTop : "11",
         elementType : "Alkali Metal",
         atnNo : "11",
         atnMass : "22.98976928 u",
         block : "s-Block",
         discover : "Humphry Davy",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWl5d3VkajE4cWFpNWI4Zm9mYzRzMzBqcnYyanR6Yng4d3h1OXp3NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZZqrogB7mIcppuwJc7/giphy.gif",
         desc : "Sodium (Na), chemical element of the alkali metal group (Group 1 [Ia]) of the periodic table. Sodium is a very soft silvery-white metal. Sodium is the most common alkali metal and the sixth most abundant element on Earth, comprising 2.8 percent of Earth’s crust. It occurs abundantly in nature in compounds, especially common salt—sodium chloride (NaCl)—which forms the mineral halite and constitutes about 80 percent of the dissolved constituents of seawater. Because sodium is extremely reactive, it never occurs in the free state in Earth’s crust. In 1807 Sir Humphry Davy became the first to prepare sodium in its elemental form, applying electrolysis to fused sodium hydroxide (NaOH). Sodium is an important constituent of a number of silicate materials, such as feldspars and micas. There are huge deposits of rock salt in various parts of the world, and sodium nitrate deposits exist in Chile and Peru. The sodium content of the sea is approximately 1.05 percent, corresponding to a concentration of approximately 3 percent of sodium halides. Sodium has been identified in both the atomic and ionic forms in the spectra of stars, including the Sun, and the interstellar medium. Analysis of meteorites indicates that the silicate material present has an average content of approximately 4.6 atoms of sodium for every 100 atoms of silicon. Lighter than water, sodium can be cut with a knife at room temperature but is brittle at low temperatures. It conducts heat and electricity easily and exhibits the photoelectric effect (emission of electrons when exposed to light) to a marked degree."
      },


      "mg" :  {
         elementName : "Magnesium",
         elementSymbol : "(Mg)",
         atomNoTop : "12",
         elementType : "Alkali Earth Metal",
         atnNo : "12",
         atnMass : "24.305 u",
         block : "s-Block",
         discover : "Humphry Davy, Joseph Black",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmk2aGd6NnIwOWFkbmVvMGd1bHU1eGZzYnlsMGFqMGhydnQycHV6cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/J3F4e60xtJBvUM0neh/giphy-downsized-large.gif",
         desc : "Magnesium (Mg), chemical element, one of the alkaline-earth metals of Group 2 (IIa) of the periodic table, and the lightest structural metal. Its compounds are widely used in construction and medicine, and magnesium is one of the elements essential to all cellular life. Known originally through compounds such as Epsom salts (the sulfate), magnesia or magnesia alba (the oxide), and magnesite (the carbonate), the silvery white element itself does not occur free in nature. It was first isolated in 1808 by Sir Humphry Davy, who evaporated the mercury from a magnesium amalgam made by electrolyzing a mixture of moist magnesia and mercuric oxide. The name magnesium comes from Magnesia, a district of Thessaly (Greece) where the mineral magnesia alba was first found. Magnesium is the eighth most abundant element in Earth’s crust (about 2.5 percent) and is, after aluminum and iron, the third most plentiful structural metal. Its cosmic abundance is estimated as 9.1 × 105 atoms (on a scale where the abundance of silicon = 106 atoms). It occurs as carbonates—magnesite, MgCO3, and dolomite, CaMg(CO3)2—and in many common silicates, including talc, olivine, and most kinds of asbestos. It also is found as hydroxide (brucite), chloride (carnallite, KMgCl3∙6H2O), and sulfate (kieserite). It is distributed in minerals such as serpentine, chrysolite, and meerschaum. Seawater contains about 0.13 percent magnesium, mostly as the dissolved chloride, which imparts its characteristic bitter taste.  Magnesium is a powerful reducing agent and is used to produce other metals from their compounds"
      },

      "al" : {
         elementName : "Aluminium",
         elementSymbol : "(Al)",
         atomNoTop : "13",
         elementType : "Post-transition Metal",
         atnNo : "13",
         atnMass : "26.9815386 u",
         block : "p-Block",
         discover : "Hans Christian Orsted",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHNhM3Znd3ozeXB1ZjFjc3RwdGp6M2o1Nmc2Mm4xMnl5MG12d21weCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L2YXRIILyWU5SNceIy/giphy-downsized-large.gif",
         desc : "Aluminum (Al), also spelled aluminium, chemical element, a lightweight silvery white metal of main Group 13 (IIIa, or boron group) of the periodic table. Aluminum is the most abundant metallic element in Earth’s crust and the most widely used nonferrous metal. Because of its chemical activity, aluminum never occurs in the metallic form in nature, but its compounds are present to a greater or lesser extent in almost all rocks, vegetation, and animals. Aluminum is concentrated in the outer 16 km (10 miles) of Earth’s crust, of which it constitutes about 8 percent by weight; it is exceeded in amount only by oxygen and silicon. The name aluminum is derived from the Latin word alumen, used to describe potash alum, or aluminum potassium sulfate, KAl(SO4)2∙12H2O. Aluminum occurs in igneous rocks chiefly as aluminosilicates in feldspars, feldspathoids, and micas; in the soil derived from them as clay; and upon further weathering as bauxite and iron-rich laterite. Bauxite, a mixture of hydrated aluminum oxides, is the principal aluminum ore. Crystalline aluminum oxide (emery, corundum), which occurs in a few igneous rocks, is mined as a natural abrasive or in its finer varieties as rubies and sapphires. Crude aluminum was isolated (1825) by Danish physicist Hans Christian Ørsted by reducing aluminum chloride with potassium amalgam. British chemist Sir Humphry Davy had prepared (1809) an iron-aluminum alloy by electrolyzing fused alumina (aluminum oxide). "
      },

      "si" : {
         elementName : "Silicon",
         elementSymbol : "(Si)",
         atomNoTop : "14",
         elementType : "Metalloid",
         atnNo : "14",
         atnMass : "28.0855 u",
         block : "p-Block",
         discover : "Antoine Lavoisier, Jöns Jacob Berzelius",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjkxOHBlN2NsaXN0cHp0OWt0ZHQyZWtnMGVxOGYxdHh5NW5zaTJudCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WTXIBTyOtiXUquSt1u/giphy-downsized-large.gif",
         desc : "Silicon (Si), a nonmetallic chemical element in the carbon family (Group 14 [IVa] of the periodic table). Silicon makes up 27.7 percent of Earth’s crust; it is the second most abundant element in the crust, being surpassed only by oxygen. The name silicon derives from the Latin silex or silicis, meaning “flint” or “hard stone.” Amorphous elemental silicon was first isolated and described as an element in 1824 by Jöns Jacob Berzelius, a Swedish chemist. Impure silicon had already been obtained in 1811. Crystalline elemental silicon was not prepared until 1854, when it was obtained as a product of electrolysis. In the form of rock crystal, however, silicon was familiar to the predynastic Egyptians, who used it for beads and small vases; to the early Chinese; and probably to many others of the ancients.  Certainly, many of the naturally occurring compounds called silicates were used in various kinds of mortar for construction of dwellings by the earliest people. On a weight basis, the abundance of silicon in the crust of Earth is exceeded only by oxygen. Estimates of the cosmic abundance of other elements often are cited in terms of the number of their atoms per 106 atoms of silicon. Only hydrogen, helium, oxygen, neon, nitrogen, and carbon exceed silicon in cosmic abundance. Silicon is believed to be a cosmic product of alpha-particle absorption, at a temperature of about 109 K, by the nuclei of carbon-12, oxygen-16, and neon-20. The energy binding the particles that form the nucleus of silicon is about 8.4 million electron volts (MeV) per nucleon (proton or neutron)."
      },

      "p" : {
         elementName : "Phosphorus",
         elementSymbol : "(P)",
         atomNoTop : "15",
         elementType : "Reactive Nonmetal",
         atnNo : "15",
         atnMass : "30.973762 u",
         block : "p-Block",
         discover : "Hennig Brand",
         link : "https://media4.giphy.com/media/q3Yd4oczhE2iGQFDR9/200w.gif?cid=6c09b952cuwfthoaf6lnw4g8m529eo940tloy339c7qr5cdy&ep=v1_gifs_search&rid=200w.gif&ct=g",
         desc : "Phosphorus (P), nonmetallic chemical element of the nitrogen family (Group 15 [Va] of the periodic table) that at room temperature is a colourless, semitransparent, soft, waxy solid that glows in the dark. Arabian alchemists of the 12th century may have isolated elemental phosphorus by accident, but the records are unclear. Phosphorus appears to have been discovered in 1669 by Hennig Brand, a German merchant whose hobby was alchemy. Brand allowed 50 buckets of urine to stand until they putrified and “bred worms.” He then boiled the urine down to a paste and heated it with sand, thereby distilling elemental phosphorus from the mixture. Brand reported his discovery in a letter to Gottfried Wilhelm Leibniz, and, thereafter, demonstrations of this element and its ability to glow in the dark, or “phosphoresce,” excited public interest. Phosphorus, however, remained a chemical curiosity until about a century later when it proved to be a component of bones. Digestion of bones with nitric or sulfuric acid formed phosphoric acid, from which phosphorus could be distilled by heating with charcoal. In the late 1800s James Burgess Readman of Edinburgh developed an electric furnace method for producing the element from phosphate rock, which is essentially the method employed today. About 550 different minerals have been found to contain phosphorus, but, of these, the principal source of phosphorus is the apatite series in which calcium ions exist along with phosphate ions and variable amounts of fluoride, chloride, or hydroxide ions, according to the formula [Ca10(PO4)6(F, Cl, or OH)2]. "
      },

      "s" : {
         elementName : "Sulfur",
         elementSymbol : "(S)",
         atomNoTop : "16",
         elementType : "Reactive Nonmetal",
         atnNo : "16",
         atnMass : "32.065 u",
         block : "p-Block",
         discover : "Antoine Lavoisier",
         link : " https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHVoNG5jdnJqbXl2YWZjdXdydW4xd2xyeG5iZjVxeXU4anJ0dHhtdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Te1DYtRJ77XbYqsJDx/giphy-downsized-large.gif",
         desc : "Sulfur (S), also spelled sulphur, nonmetallic chemical element belonging to the oxygen group (Group 16 [VIa] of the periodic table), one of the most reactive of the elements. Pure sulfur is a tasteless, odourless, brittle solid that is pale yellow in colour, a poor conductor of electricity, and insoluble in water. It reacts with all metals except gold and platinum, forming sulfides; it also forms compounds with several nonmetallic elements. Millions of tons of sulfur are produced each year, mostly for the manufacture of sulfuric acid, which is widely used in industry. In cosmic abundance, sulfur ranks ninth among the elements, accounting for only one atom of every 20,000–30,000. Sulfur occurs in the uncombined state as well as in combination with other elements in rocks and minerals that are widely distributed, although it is classified among the minor constituents of Earth’s crust, in which its proportion is estimated to be between 0.03 and 0.06 percent. On the basis of the finding that certain meteorites contain about 12 percent sulfur, it has been suggested that deeper layers of Earth contain a much larger proportion. Seawater contains about 0.09 percent sulfur in the form of sulfate. In underground deposits of very pure sulfur that are present in domelike geologic structures, the sulfur is believed to have been formed by the action of bacteria upon the mineral anhydrite, in which sulfur is combined with oxygen and calcium. Deposits of sulfur in volcanic regions probably originated from gaseous hydrogen sulfide generated below the surface of Earth and transformed into sulfur by reaction with the oxygen in the air."
      },

      "cl" : {
         elementName : "Chlorine",
         elementSymbol : "(Cl)",
         atomNoTop : "17",
         elementType : "Reactive Nonmetal",
         atnNo : "17",
         atnMass : "35.453 u",
         block : "p-Block",
         discover : "Carl Wilhelm Scheele",
         link : "https://tse4.mm.bing.net/th?id=OIP.zMi9HgSI3hN2c8xZqJDvxgHaFj&pid=Api&P=0&h=180",
         desc : "Chlorine (Cl), chemical element, the second lightest member of the halogen elements, or Group 17 (Group VIIa) of the periodic table. Chlorine is a toxic, corrosive, greenish yellow gas that is irritating to the eyes and to the respiratory system. Rock salt (common salt, or sodium chloride) has been known for several thousand years. It is the main constituent of the salts dissolved in seawater, from which it was obtained in ancient Egypt by evaporation. In Roman times, soldiers were partially paid in salt (salarium, the root of the modern word salary). In 1648 the German chemist Johann Rudolf Glauber obtained a strong acid, which he called spirit of salt, by heating moist salt in a charcoal furnace and condensing the fumes in a receiver. Later he obtained the same product, now known to be hydrochloric acid, by heating salt with sulfuric acid. In 1774 the Swedish chemist Carl Wilhelm Scheele treated powdered black oxide of manganese with hydrochloric acid and obtained a greenish-yellowish gas, which he failed to recognize as an element. The true nature of the gas as an element was recognized in 1810 by English chemist Humphry Davy, who later named it chlorine (from the Greek chloros, meaning “yellowish green”) and provided an explanation for its bleaching action. chlorine (Cl) in volcanic gases, chlorine is usually found only in the form of chemical compounds. It constitutes 0.017 percent of Earth’s crust. Natural chlorine is a mixture of two stable isotopes: chlorine-35 (75.53 percent) and chlorine-37 (24.47 percent).  "
      },


      "ar" : {
         elementName : "Argon",
         elementSymbol : "(Ar)",
         atomNoTop : "18",
         elementType : "Nobel Gas",
         atnNo : "18",
         atnMass : "39.948 u",
         block : "p-Block",
         discover : "ohn William Strutt, 3rd Baron Rayleigh",
         link : "https://media3.giphy.com/media/YlZK330IGhhf5DxyKx/giphy.gif",
         desc : "Argon (Ar), chemical element, inert gas of Group 18 (noble gases) of the periodic table, terrestrially the most abundant and industrially the most frequently used of the noble gases. Colourless, odourless, and tasteless, argon gas was isolated (1894) from air by the British scientists Lord Rayleigh and Sir William Ramsay. Henry Cavendish, while investigating atmospheric nitrogen (“phlogisticated air”), had concluded in 1785 that not more than 1/120 part of the nitrogen might be some inert constituent. His work was forgotten until Lord Rayleigh, more than a century later, found that nitrogen prepared by removing oxygen from air is always about 0.5 percent more dense than nitrogen derived from chemical sources such as ammonia. The heavier gas remaining after both oxygen and nitrogen had been removed from air was the first of the noble gases to be discovered on Earth and was named after the Greek word argos, “lazy,” because of its chemical inertness. (Helium had been spectroscopically detected in the Sun in 1868.). In cosmic abundance, argon ranks approximately 12th among the chemical elements. Argon constitutes 1.288 percent of the atmosphere by weight and 0.934 percent by volume and is found occluded in rocks. Although the stable isotopes argon-36 and argon-38 make up all but a trace of this element in the universe, the third stable isotope, argon-40, makes up 99.60 percent of the argon found on Earth. (Argon-36 and argon-38 make up 0.34 and 0.06 percent of Earth’s argon, respectively.) ."
      },


      "k" : {
         elementName : "Potassium",
         elementSymbol : "(K)",
         atomNoTop : "19",
         elementType : "Alkali Metal",
         atnNo : "19",
         atnMass : "39.0983 u",
         block : "s-Block",
         discover : "Humphry Davy",
         link : "https://media0.giphy.com/media/YrHCC0hpOyy4HjGwh9/giphy.gif?cid=6c09b952o8en15q37zxb53psjqzlj0ubn3be8fr7kw508mtt&ep=v1_gifs_search&rid=giphy.gif&ct=g",
         desc : "Potassium (K), chemical element of Group 1 (Ia) of the periodic table, the alkali metal group, indispensable for both plant and animal life. Potassium was the first metal to be isolated by electrolysis, by the English chemist Sir Humphry Davy, when he obtained the element (1807) by decomposing molten potassium hydroxide (KOH) with a voltaic battery. Potassium metal is soft and white with a silvery lustre, has a low melting point, and is a good conductor of heat and electricity. Potassium imparts a lavender colour to a flame, and its vapour is green. It is the seventh most abundant element in Earth’s crust, constituting 2.6 percent of its mass. The potassium content of the Dead Sea is estimated at approximately 1.7 percent potassium chloride, and many other salty bodies of water are rich in potassium. The waste liquors from certain saltworks may contain up to 40 grams per litre of potassium chloride and are used as a source of potassium. Most potassium is present in igneous rocks, shale, and sediment in minerals such as muscovite and orthoclase feldspar that are insoluble in water; this makes potassium difficult to obtain. As a result, most commercial potassium compounds (often loosely called potash) are obtained via electrolysis from soluble potassium compounds, such as carnallite (KMgCl3∙6H2O), sylvite (potassium chloride, KCl), polyhalite (K2Ca2Mg[SO4]4∙2H2O), and langbeinite (K2Mg2[SO4]3), which are found in ancient lake beds and seabeds."
      },


      "ca" : {
         elementName : "Calcium",
         elementSymbol : "(Ca)",
         atomNoTop : "20",
         elementType : "Alkali Earth Metal",
         atnNo : "20",
         atnMass : "40.078 u",
         block : "s-Block",
         discover : "Humphry Davy",
         link : "https://media.istockphoto.com/id/639849820/photo/calcium.jpg?s=612x612&w=0&k=20&c=2442vxqzmyOz2OGkzaphR6ZqLIQaN_Hh3AlQma6SckI=",
         desc : "Calcium (Ca), chemical element, one of the alkaline-earth metals of Group 2 (IIa) of the periodic table. It is the most abundant metallic element in the human body and the fifth most abundant element in Earth’s crust. Calcium does not occur naturally in the free state, but compounds of the element are widely distributed. One calcium compound, lime (calcium oxide, CaO) was extensively used by the ancients. The silvery, rather soft, lightweight metal itself was first isolated (1808) by Sir Humphry Davy after distilling mercury from an amalgam formed by electrolyzing a mixture of lime and mercuric oxide. The name for the element was taken from the Latin word for lime, calx. Calcium constitutes 3.64 percent of Earth’s crust and 8 percent of the Moon’s crust, and its cosmic abundance is estimated at 4.9 × 104 atoms (on a scale where the abundance of silicon is 106 atoms). As calcite (calcium carbonate), it occurs on Earth in limestone, chalk, marble, dolomite, eggshells, pearls, coral, stalactites, stalagmites, and the shells of many marine animals. Calcium carbonate deposits dissolve in water that contains carbon dioxide to form calcium bicarbonate, Ca(HCO3)2. This process frequently results in the formation of caves and may reverse to deposit limestone as stalactites and stalagmites. As calcium hydroxyl phosphate, it is the principal inorganic constituent of teeth and bones and occurs as the mineral apatite. As calcium fluoride, it occurs as fluorite, or fluorspar."
      },


      "sc" : {
         elementName : "Scandium",
         elementSymbol : "(Sc)",
         atomNoTop : "21",
         elementType : "Transition Metal",
         atnNo : "21",
         atnMass : "44.955912 u",
         block : "d-Block",
         discover : "Per Teodor Cleve, Lars Fredrik Nilson",
         link : "https://c8.alamy.com/comp/RN8NJ6/3d-render-of-atom-structure-of-scandium-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-as-RN8NJ6.jpg",
         desc : "Scandium (Sc), chemical element, a rare-earth metal of Group 3 of the periodic table. Scandium is a silvery white, moderately soft metal. It is fairly stable in air but will slowly change its colour from silvery white to a yellowish appearance because of formation of Sc2O3 oxide on the surface. The metal slowly dissolves in diluted acids—except hydrofluoric acid (HF), in which a protective trifluoride layer prevents further reaction. Scandium is paramagnetic from 0 K (−273 °C, or −460 °F) to its melting point (1,541 °C, or 2,806 °F). It becomes superconducting at −273.1 °C (−459.6 °F) at pressures exceeding 186 kilobars. After Russian chemist Dmitry Ivanovich Mendeleyev in 1871 predicted this element’s existence, tentatively calling it ekaboron, Swedish chemist Lars Fredrik Nilson in 1879 discovered its oxide, scandia, in the rare-earth minerals gadolinite and euxenite, and Swedish chemist Per Teodor Cleve later in 1879 identified scandium as the hypothetical ekaboron. Scandium is found in small proportions, generally less than 0.2 percent, in many of the heavy lanthanide ores and in many tin, uranium, and tungsten ores. Thortveitite (a scandium silicate) is the only mineral containing large amounts of scandium, about 34 percent, but unfortunately this mineral is quite rare and is not an important source of scandium. The cosmic abundance of scandium is relatively high. Although it is only about the 50th most abundant element on Earth (its abundance is similar to that of beryllium), it is about the 23rd most abundant element in the Sun. "
      },

      "ti" : {
         elementName : "Titanium",
         elementSymbol : "(Ti)",
         atomNoTop : "22",
         elementType : "Transition Metal",
         atnNo : "22",
         atnMass : "47.867 u",
         block : "d-Block",
         discover : "Martin Heinrich Klaproth, William Gregor",
         link : "https://media0.giphy.com/media/KN1yUueXTXzjylLi5r/giphy.gif",
         desc : "Titanium (Ti), chemical element, a silvery gray metal of Group 4 (IVb) of the periodic table. Titanium is a lightweight, high-strength, low-corrosion structural metal and is used in alloy form for parts in high-speed aircraft. A compound of titanium and oxygen was discovered (1791) by the English chemist and mineralogist William Gregor and independently rediscovered (1795) and named by the German chemist Martin Heinrich Klaproth. Titanium is widely distributed and constitutes 0.44 percent of Earth’s crust. The metal is found combined in practically all rocks, sand, clay, and other soils. The two prime commercial minerals are ilmenite and rutile. The metal was isolated in pure form (1910) by the metallurgist Matthew A. Hunter by reducing titanium tetrachloride (TiCl4) with sodium in an airtight steel cylinder. Titanium cannot be obtained by the common method of reducing the oxide with carbon because a very stable carbide is readily produced, and, moreover, the metal is quite reactive toward oxygen and nitrogen at elevated temperatures. Therefore, special processes have been devised that, after 1950, changed titanium from a laboratory curiosity to an important commercially produced structural metal. In the Kroll process, one of the ores, such as ilmenite (FeTiO3) or rutile (TiO2), is treated at red heat with carbon and chlorine to yield titanium tetrachloride, TiCl4, which is fractionally distilled to eliminate impurities such as ferric chloride, FeCl3. The TiCl4 is then reduced with molten magnesium at about 800 °C (1,500 °F) in an atmosphere"
      },

      "v" : {
         elementName : "Vanadium",
         elementSymbol : "(V)",
         atomNoTop : "23",
         elementType : "Transition Metal",
         atnNo : "23",
         atnMass : "50.9415 u",
         block : "d-Block",
         discover : "Andrés Manuel del Río",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXRuZzJwZTk2MHJibGo5MmxvNXE5bmJlNWg0cmI3ODNoeHpwd3g2NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YQGc6X8pUi55X4ll7Y/giphy-downsized-large.gif",
         desc : "Vanadium (V) is a grayish silver metal whose crystal structure is a body-centred cubic (bcc) lattice, with a melting point of 1,926° C (3,499° F). The metal is used principally as an alloying addition to high-strength low-alloy (HSLA) steels and, to a lesser extent, in tool steels and iron and steel castings. It is also an important strengthener for titanium alloys. Vanadium alloys are promising candidates for applications in nuclear reactors. The metal is recognized as an industrial hazard, however, as breathing of particulate material with a high vanadium content has been observed to cause an intense, dry cough accompanied by irritation of the nose, eyes, and throat. The discovery of vanadium was first claimed in 1801 by a Spanish mineralogist, Andrés Manuel del Río, who gave it the name erythronium, after the red colour of one of its chemical compounds (Greek erythros, “red”). In 1830 a Swedish chemist, Nils Gabriel Sefström, rediscovered the element and named it vanadium, after Vanadis, the Scandinavian goddess of beauty, because of the beautiful colours of its compounds in solution. The English chemist Henry Enfield Roscoe first isolated the metal by hydrogen reduction of vanadium dichloride in 1867, and the American chemists John Wesley Marden and Malcolm N. Rich obtained vanadium of 99.7 percent purity by a calcium reduction process in 1925. The important vanadium minerals are patronite (VS4), carnotite [K2(UO2)2(VO4)2], and vanadinite, [Pb5(VO4)3Cl]."
      },

      "cr" :{
         elementName : "Chromium",
         elementSymbol : "(Cr)",
         atomNoTop : "24",
         elementType : "Transition Metal",
         atnNo : "24",
         atnMass : "51.9961 u",
         block : "d-Block",
         discover : "Louis Nicolas Vauquelin, Martin Heinrich Klaproth",
         link : "https://media.istockphoto.com/id/663543884/vector/chromium.jpg?s=1024x1024&w=is&k=20&c=Kze83A0TwN0sydwZilOPJwUS2IAB-_ZkwYK1FZg9dxU=",
         desc : "Chromium (Cr), chemical element of Group 6 (VIb) of the periodic table, a hard steel-gray metal that takes a high polish and is used in alloys to increase strength and corrosion resistance. Chromium was discovered (1797) by the French chemist Nicolas-Louis Vauquelin and isolated as the metal a year later; it was named for its multicoloured compounds. The green colour of emerald, serpentine, and chrome mica and the red colour of ruby are due to small amounts of chromium. The name of the element chromium (from Greek chrōmos, “colour”) connotes the pronounced and varied colorations of chromium compounds. Chromium is a relatively abundant element in Earth’s crust; the free metal is never found in nature. Most ores consist of the mineral chromite, the ideal formula of which is FeCr2O4. It is widely dispersed in natural deposits, which are usually contaminated with oxygen, magnesium, aluminum, and silica; their chromium content varies from 42 to 56 percent. One of the chief uses of chromium is in ferrous alloys, for which the pure metal is not required. Accordingly, chromite is often reduced with carbon in a furnace, producing the alloy ferrochromium, which contains iron and chromium in an atom ratio of approximately 1 to 2. In the +6 oxidation state, the most important species formed by chromium are the chromate, CrO42−, and dichromate, Cr2O72−, ions. "
      },

      "mn": {
         elementName : "Manganese",
         elementSymbol : "(Mn)",
         atomNoTop : "25",
         elementType : "Transition Metal",
         atnNo : "25",
         atnMass : "54.938044 u",
         block : "d-Block",
         discover : "Carl Wilhelm Scheele, Johan Gottlieb Gahn, Ignatius Gottfried Kaim",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHVrcXFkYWVhMHAwbzR1amR0OWgydTl2b3UzZWZseG03cWRrYWVmeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gJu1FqzdVDHUFzIIx3/giphy-downsized-large.gif",
         desc : "Manganese (Mn), chemical element, one of the silvery white, hard, brittle metals of Group 7 (VIIb) of the periodic table. It was recognized as an element in 1774 by the Swedish chemist Carl Wilhelm Scheele while working with the mineral pyrolusite and was isolated the same year by his associate, Johan Gottlieb Gahn. Although it is rarely used in pure form, manganese is essential to steelmaking. Manganese combined with other elements is widely distributed in Earth’s crust. Manganese is second only to iron among the transition elements in its abundance in Earth’s crust; it is roughly similar to iron in its physical and chemical properties but is harder and more brittle. It occurs in a number of substantial deposits, of which the most important ores (which are mainly oxides) consist primarily of manganese dioxide (MnO2) in the form of pyrolusite, romanechite, and wad. Manganese is quite electropositive, dissolving very readily in dilute nonoxidizing acids. Although relatively unreactive toward nonmetals at room temperature, it reacts with many at elevated temperatures. Thus, manganese burns in chlorine to give manganese(II) chloride (MnCl2), reacts with fluorine to give manganese(II) fluoride (MnF2) and manganese(III) fluoride (MnF3), burns in nitrogen at about 1,200 °C (2,200 °F) to give manganese(II) nitride (Mn3N2), and burns in oxygen to give manganese(II,III) oxide (Mn3O4). Manganese also combines directly with boron, carbon, sulfur, silicon, or phosphorus but not with hydrogen."
      },


      "fe" : {
         elementName : "Iron",
         elementSymbol : "(Fe)",
         atomNoTop : "26",
         elementType : "Transition Metal",
         atnNo : "26",
         atnMass : "55.845 u",
         block : "d-Block",
         discover : "Hittites",
         link : "https://media.istockphoto.com/id/493163650/vector/iron-atom-structure.jpg?s=612x612&w=0&k=20&c=VJXgifV2YMiUMG4M3Y6Nxnq91s6BjqFg-MQ223n1Lgk=",
         desc : "Iron (Fe), chemical element, metal of Group 8 (VIIIb) of the periodic table, the most-used and cheapest metal. Iron makes up 5 percent of Earth’s crust and is second in abundance to aluminum among the metals and fourth in abundance behind oxygen, silicon, and aluminum among the elements. Iron, which is the chief constituent of Earth’s core, is the most abundant element in Earth as a whole (about 35 percent) and is relatively plentiful in the Sun and other stars. In the crust the free metal is rare, occurring as terrestrial iron (alloyed with 2–3 percent nickel) in basaltic rocks in Greenland and carbonaceous sediments in the United States (Missouri) and as a low-nickel meteoric iron (5–7 percent nickel), kamacite. Nickel-iron, a native alloy, occurs in terrestrial deposits (21–64 percent iron, 77–34 percent nickel) and in meteorites as taenite (62–75 percent iron, 37–24 percent nickel). (For mineralogical properties of native iron and nickel-iron, see native elements [table].) Meteorites are classified as iron, iron-stone, or stony according to the relative proportion of their iron and silicate-mineral content. Iron is also found combined with other elements in hundreds of minerals; of greatest importance as iron ore are hematite (ferric oxide, Fe2O3), magnetite (triiron tetroxide, Fe3O4), limonite (hydrated ferric oxide hydroxide, FeO(OH)∙nH2O), and siderite (ferrous carbonate, FeCO3). Igneous rocks average about 5 percent iron content. The metal is extracted by smelting with carbon (coke) and limestone."
      },

      "co" : {
         elementName : "Cobalt",
         elementSymbol : "(Co)",
         atomNoTop : "27",
         elementType : "Transition Metal",
         atnNo : "27",
         atnMass : "58.933195 u",
         block : "d-Block",
         discover : "Georg Brandt",
         link : "https://media3.giphy.com/media/KZYUwFy1Oay5IxBC8a/giphy.gif",
         desc : "Cobalt (Co), chemical element, ferromagnetic metal of Group 9 (VIIIb) of the periodic table, used especially for heat-resistant and magnetic alloys. The metal was isolated (c. 1735) by Swedish chemist Georg Brandt, though cobalt compounds had been used for centuries to impart a blue colour to glazes and ceramics. Cobalt has been detected in Egyptian statuettes and Persian necklace beads of the 3rd millennium BCE, in glass found in the Pompeii ruins, and in China as early as the Tang dynasty (618–907 CE) and later in the blue porcelain of the Ming dynasty (1368–1644). The name kobold was first applied (16th century) to ores thought to contain copper but eventually found to be poisonous arsenic-bearing cobalt ores. Brandt finally determined (1742) that the blue colour of those ores was due to the presence of cobalt. Cobalt, though widely dispersed, makes up only 0.001 percent of Earth’s crust. It is found in small quantities in terrestrial and meteoritic native nickel-iron, in the Sun and stellar atmospheres, and in combination with other elements in natural waters, in ferromanganese crusts deep in the oceans, in soils, in plants and animals, and in minerals such as cobaltite, linnaeite, skutterudite, smaltite, heterogenite, and erythrite. Polished cobalt is silver-white with a faint bluish tinge. Two allotropes are known: the hexagonal close-packed structure, stable below 417 °C (783 °F), and the face-centred cubic, stable at high temperatures. It is ferromagnetic up to 1,121 °C (2,050 °F, the highest known Curie point of any metal or alloy)"
      },

      "ni" : {
         elementName : "Nickel",
         elementSymbol : "(Ni)",
         atomNoTop : "28",
         elementType : "Transition Metal",
         atnNo : "28",
         atnMass : "58.6934 u",
         block : "d-Block",
         discover : "Axel Fredrik Cronstedt",
         link : "https://media2.giphy.com/media/eNYe5fkB63We8jRhvP/giphy.gif",
         desc : "Nickel silver, a range of alloys of copper, nickel, and zinc which are silvery in appearance but contain no silver. Its composition varies from 7 to 30 percent nickel, the alloy most widely used being 18 percent nickel silver (18 percent nickel, 62 percent copper, 20 percent zinc). In general the zinc content is lowered as the nickel is increased, the copper content varying between 53 and 63 percent. Sterling silver, in contrast, is an alloy in which pure silver makes up at least 92.5 percent of the content. The importance of these alloys lies in their colour, ductility, good mechanical properties, and suitability for working in a wide variety of cast, rolled and extruded, or drawn shapes. The addition of 1–2 percent lead improves machining properties. A natural alloy known as paktong (white copper), smelted by the Chinese from copper-nickel ores, was one of the first alloys used by humans. It was later improved by the addition of zinc ores and was imported into Europe by the East India Company. Not until the 1840s was the alloy made in Europe by mixing the three metals, and it was known as German silver until 1914. After an electroplating plant was set up in Birmingham in 1844 German silver was found very suitable as a basis for silver plating. Other aspects of condensed matter involve the properties of the ordinary liquid state, of liquid crystals, and, at temperatures near absolute zero (−273.15 °C, or −459.67 °F), of the so-called quantum liquids. The latter exhibit a property known as superfluidity (completely frictionless flow), which is an example of macroscopic quantum phenomena."
      },


      "cu" : {
         elementName : "Copper",
         elementSymbol : "(Cu)",
         atomNoTop : "29",
         elementType : "Transition Metal",
         atnNo : "29",
         atnMass : "63.546 u",
         block : "d-Block",
         discover : "the early Mesopotamians",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXI5Z2V0NHFxY3pnMHk5eDZkMjFzMGVmemhjMnN0cXg4Nm11eWh3ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iILbRWewmvIv2kVGMe/giphy-downsized-large.gif",
         desc : "Copper (Cu), chemical element, a reddish, extremely ductile metal of Group 11 (Ib) of the periodic table that is an unusually good conductor of electricity and heat. Copper is found in the free metallic state in nature. This native copper was first used (c. 8000 BCE) as a substitute for stone by Neolithic (New Stone Age) humans. Metallurgy dawned in Mesopotamia as copper was cast to shape in molds (c. 4000 BCE), was reduced to metal from ores with fire and charcoal, and was intentionally alloyed with tin as bronze (c. 3500 BCE). The Roman supply of copper came almost entirely from Cyprus. It was known as aes Cyprium, “metal of Cyprus,” shortened to cyprium and later corrupted to cuprum. See also bronze. Native copper is found at many locations as a primary mineral in basaltic lavas and also as reduced from copper compounds, such as sulfides, arsenides, chlorides, and carbonates. (For mineralogical properties of copper, see the table of native elements.) Copper occurs combined in many minerals, such as chalcocite, chalcopyrite, bornite, cuprite, malachite, and azurite. It is present in the ashes of seaweeds, in many sea corals, in the human liver, and in many mollusks and arthropods. Copper plays the same role of oxygen transport in the hemocyanin of blue-blooded mollusks and crustaceans as iron does in the hemoglobin of red-blooded animals. The copper present in humans as a trace element helps catalyze hemoglobin formation. A porphyry copper deposit in the Andes Mountains of Chile is the greatest known deposit of the mineral."
      },


      "zn" : {
         elementName : "Zinc",
         elementSymbol : "(Zn)",
         atomNoTop : "30",
         elementType : "Transition Metal",
         atnNo : "30",
         atnMass : "65.38 u",
         block : "d-Block",
         discover : "Andreas Marggraf",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDZxa245OG53dno2Mnc0aW4wcnBmeGd5eHpnZG5jZzdnb3k2NnBxbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gLQslDCTCupVZa6apV/giphy-downsized-large.gif",
         desc : "Zinc (Zn), chemical element, a low-melting metal of Group 12 (IIb, or zinc group) of the periodic table, that is essential to life and is one of the most widely used metals. Zinc is of considerable commercial importance. A little more abundant than copper, zinc makes up an average of 65 grams (2.3 ounces) of every ton of Earth’s crust. The chief zinc mineral is the sulfide sphalerite (zinc blende), which, together with its oxidation products smithsonite and hemimorphite, constitute nearly all of the world’s zinc ore. Native zinc has been reported from Australia, New Zealand, and the United States, and the leading early 21st-century producers of zinc are China, Australia and Peru. For zinc’s mineralogical properties, see native element. Zinc is an essential trace element in the human body, where it is found in high concentration in the red blood cells as an essential part of the enzyme carbonic anhydrase, which promotes many reactions relating to carbon dioxide metabolism. The zinc present in the pancreas may aid in the storage of insulin. Zinc is a component of some enzymes that digest protein in the gastrointestinal tract. Hot-dip galvanizing is the most common procedure for coating steel with zinc. This may be a batch process known as general galvanizing or a continuous coating of coils of steel strip. In general galvanizing, steel is pickled in acid, treated with fluxing agents, and then dipped in a bath of molten zinc at about 450 °C (840 °F). Layers of iron-zinc alloy are formed on the surface and are topped with an outer layer of zinc."
      },


      "ga" : {
         elementName : "Gallium",
         elementSymbol : "(Ga)",
         atomNoTop : "31",
         elementType : "Post-transition Metal",
         atnNo : "31",
         atnMass : "69.723 u",
         block : "p-Block",
         discover : "Paul-Émile Lecoq de Boisbaudran",
         link : "https://c8.alamy.com/comp/RN8NJA/3d-render-of-atom-structure-of-gallium-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-as-RN8NJA.jpg" ,
         desc : "Gallium (Ga), chemical element, metal of main Group 13 (IIIa, or boron group) of the periodic table. It liquefies just above room temperature. Gallium was discovered (1875) by French chemist Paul-Émile Lecoq de Boisbaudran, who observed its principal spectral lines while examining material separated from zinc blende. Soon afterward he isolated the metal and studied its properties, which coincided with those that Russian chemist Dmitry Ivanovich Mendeleyev had predicted a few years earlier for eka-aluminum, the then-undiscovered element lying between aluminum and indium in his periodic table. Though widely distributed at Earth’s surface, gallium does not occur free or concentrated in independent minerals, except for gallite, CuGaS2, rare and economically insignificant. It is extracted as a by-product from zinc blende, iron pyrites, bauxite, and germanite. Gallium is silvery white and soft enough to be cut with a knife. It takes on a bluish tinge because of superficial oxidation. Unusual for its low melting point (about 30 °C [86 °F]), gallium also expands upon solidification and supercools readily, remaining a liquid at temperatures as low as 0 °C (32 °F). Gallium remains in the liquid phase over a temperature range of about 2,000 °C (about 3,600 °F), with a very low vapour pressure up to about 1,500 °C (about 2,700 °F), the longest useful liquid range of any element. The liquid metal clings to (wets) glass and similar surfaces. In most of its compounds, gallium has an oxidation state of +3 and, in a few, +1. There is no evidence for authentic compounds of gallium"
      },


      "ge" : {
         elementName : "Germanium",
         elementSymbol : "(Ge)",
         atomNoTop : "32",
         elementType : "Metalloid",
         atnNo : "32",
         atnMass : "72.64 u",
         block : "p-Block",
         discover : "Clemens Winkler",
         link : "https://c8.alamy.com/comp/RN8NJB/3d-render-of-atom-structure-of-germanium-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-a-RN8NJB.jpg",
         desc : "Germanium (Ge), a chemical element between silicon and tin in Group 14 (IVa) of the periodic table, a silvery-gray metalloid, intermediate in properties between the metals and the nonmetals. Although germanium was not discovered until 1886 by Clemens Winkler, a German chemist, its existence, properties, and position in the periodic system had been predicted in 1871 by the Russian chemist Dmitry Ivanovich Mendeleyev, who called the hypothetical element ekasilicon. (The name germanium derives from the Latin word Germania [Germany] and was given to the element by Winkler.) Germanium did not become economically significant until after 1945, when its properties as a semiconductor were recognized as being of value in electronics. Many other substances now also are used as semiconductors, but germanium remains of primary importance in the manufacture of transistors and of components for devices such as rectifiers and photocells. On a weight basis, germanium is a scarce but not an extremely rare (about 1.5 parts per million) element in the crust of the Earth, equaling in abundance beryllium, molybdenum, and cesium and exceeding the elements arsenic, cadmium, antimony, and mercury. The element is brittle rather than ductile; the atoms in its crystals are arranged as are the carbon atoms in diamond. The electrical and semiconducting characteristics of germanium are comparable to those of silicon. It is not attacked by air at room temperature but is oxidized at 600°–700° C (1,100°–1,300° F) and reacts quickly with the halogens to form tetrahalides.  "
      },
      

      "as" : {
         elementName : "Arsenic",
         elementSymbol : "(As)",
         atomNoTop : "33",
         elementType : "Metalloid",
         atnNo : "33",
         atnMass : "74.9216 u",
         block : "p-Block",
         discover : "Albertus Magnus",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2hyZDJlY3VtbnZrcXlud3R3OHo4bG8ybjBrdGxoYzk4czhucXFvcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gH2RV00WIBEzebvTgN/giphy.gif",
         desc : "Arsenic (As), a chemical element in the nitrogen group (Group 15 [Va] of the periodic table), existing in both gray and yellow crystalline forms. Arsenic was known in the form of certain of its compounds long before it was clearly recognized as a chemical element. In the 4th century BCE Aristotle wrote of a substance called sandarache, now believed to have been the mineral realgar, a sulfide of arsenic. Then, in the 1st century CE, the writers Pliny the Elder and Pedanius Dioscorides both described auripigmentum, a substance now thought to have been the dyestuff orpiment, As2S3. By the 11th century CE three species of “arsenic” were recognized: white (As4O6), yellow (As2S3), and red (As4S4).  A small amount exists in the native state, in 90–98 percent purity, generally in association with such metals as antimony and silver. Most, however, is combined in more than 150 different minerals, as sulfides, arsenides, sulfoarsenides, and arsenites. Mispickel, or arsenopyrite, FeAsS, is among the most common of arsenic-bearing minerals; others are realgar, As4S4; orpiment, As2S3; loellingite, FeAs2; and enargite, Cu3AsS4. Arsenic oxide is also common. Most commercial arsenic is recovered as a by-product of the smelting of copper, lead, cobalt, and gold ores. Metallic arsenic forms when arsenopyrite is heated at 650–700 °C in the absence of air. The arsenic in arsenopyrite and the arsenic impurities in other metal ores unite readily with oxygen when heated in air, forming the easily sublimed oxide, As4O6, also known as “white arsenic.” "
      },

      "se" : {
         elementName : "Selenium",
         elementSymbol : "(Se)",
         atomNoTop : "34",
         elementType : "Reactive Nonmetal",
         atnNo : "34",
         atnMass : "78.96 u",
         block : "p-Block",
         discover : "öns Jacob Berzelius, Johan Gottlieb Gahn",
         link : "https://c8.alamy.com/comp/RN8NJF/3d-render-of-atom-structure-of-selenium-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-as-RN8NJF.jpg",
         desc : "Selenium (Se), a chemical element in the oxygen group (Group 16 [VIa] of the periodic table), closely allied in chemical and physical properties with the elements sulfur and tellurium. Selenium is rare, composing approximately 90 parts per billion of the crust of Earth. It is occasionally found uncombined, accompanying native sulfur, but is more often found in combination with heavy metals (copper, mercury, lead, or silver) in a few minerals. The principal commercial source of selenium is as a by-product of copper refining; its major uses are in the manufacture of electronic equipment, in pigments, and in making glass. Selenium is a metalloid (an element intermediate in properties between the metals and the nonmetals). The gray, metallic form of the element is the most stable under ordinary conditions; this form has the unusual property of greatly increasing in electrical conductivity when exposed to light. Selenium compounds are toxic to animals; plants grown in seleniferous soils may concentrate the element and become poisonous. In 1817 Swedish chemist Jöns Jacob Berzelius noted a red substance resulting from sulfide ores from mines of Falun, Sweden. When this red material was investigated in the following year, it proved to be an element and was named after the Moon or the Moon goddess Selene. The proportion of selenium in Earth’s crust is about 10−5 to 10−6 percent. It has been obtained mainly from the anode slimes (deposits and residual materials from the anode) in electrolytic refining of copper and nickel. "
      },


      "br" :{
         elementName : "Bromine",
         elementSymbol : "(Br)",
         atomNoTop : "35",
         elementType : "Reactive Nonmetal",
         atnNo : "35",
         atnMass : "79.904 u",
         block : "p-Block",
         discover : "Antoine Jérôme Balard, Carl Jacob Löwig",
         link : "https://c8.alamy.com/comp/RN8NJG/3d-render-of-atom-structure-of-bromine-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-as-RN8NJG.jpg",
         desc : "Bromine (Br), chemical element, a deep red noxious liquid, and a member of the halogen elements, or Group 17 (Group VIIa) of the periodic table. Bromine was discovered in 1826 by the French chemist Antoine-Jérôme Balard in the residues (bitterns) from the manufacture of sea salt at Montpellier. He liberated the element by passing chlorine through an aqueous solution of the residues, which contained magnesium bromide. Distillation of the material with manganese dioxide and sulfuric acid produced red vapours, which condensed to a dark liquid. The similarity of this procedure to that for making chlorine suggested to Balard that he had obtained a new element similar to chlorine. A rare element, bromine is found in nature dispersed throughout Earth’s crust only in compounds as soluble and insoluble bromides. Some enrichment occurs in ocean water (65 parts per million by weight), in the Dead Sea (approximately 5 grams per litre [0.7 ounce per gallon]), in some thermal springs, and in rare insoluble silver bromide minerals (such as bromyrite, found in Mexico and Chile). Natural bromine is a mixture of two stable isotopes: bromine-79 (50.54 percent) and bromine-81 (49.46 percent). Of the 17 known radioactive isotopes of the element, bromine-77 has the longest half-life (57 hours). About 3.41 grams (0.12 ounce) of bromine dissolve in 100 millilitres (0.1 quart) of water at room temperature. The solution is known as bromine water. Like chlorine water, it is a good oxidizing agent, and it is more useful because it does not decompose."
      },


      "kr" : {
         elementName : "Krypton",
         elementSymbol : "(Kr)",
         atomNoTop : "36",
         elementType : "Nobel Gas",
         atnNo : "36",
         atnMass : "83.798 u",
         block : "p-Block",
         discover : "William Ramsay, Morris Travers",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGwxNHo2NjZudzJkYmNzeXhkMTQ2aDFybGc4eWJ6cHU2NDhpdmk2YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8vqF2pDW81QCar5pqq/giphy.gif",
         desc : "Krypton (Kr), chemical element, a rare gas of Group 18 (noble gases) of the periodic table, which forms relatively few chemical compounds. About three times heavier than air, krypton is colourless, odourless, tasteless, and monatomic. Although traces are present in meteorites and minerals, krypton is more plentiful in Earth’s atmosphere, which contains 1.14 parts per million by volume of krypton. The element was discovered in 1898 by the British chemists Sir William Ramsay and Morris W. Travers in the residue left after a sample of liquid air had boiled almost entirely away. Because its boiling point (−153.4 °C, or −244.1 °F) is about 30–40 °C (50–70 °F) higher than those of the major constituents of air, krypton is readily separated from liquid air by fractional distillation; it accumulates along with xenon in the least volatile portion. These two gases are further purified by adsorption onto silica gel, redistillation, and passage over hot titanium metal, which removes all impurities except other noble gases. Krypton is used in certain electric and fluorescent lamps and in a flashlamp employed in high-speed photography. Radioactive krypton-85 is useful for detecting leaks in sealed containers, with the escaping atoms detected by means of their radiation. Krypton is named from the Greek word kryptos, “hidden.”. When a current of electricity is passed through a glass tube containing krypton at low pressure, a bluish white light is emitted. The wavelength of an orange-red component of light emitted by stable krypton-86."
      },


      "rb" : {
         elementName : "Rubidium",
         elementSymbol : "(Rb)",
         atomNoTop : "37",
         elementType : "Alkali Metal",
         atnNo : "37",
         atnMass : "85.4678 u",
         block : "s-Block",
         discover : "Gustav Kirchhoff, Robert Bunsen",
         link : "https://c8.alamy.com/comp/2GWT258/symbol-and-electron-diagram-for-rubidium-2GWT258.jpg",
         desc : "Rubidium (Rb), chemical element of Group 1 (Ia) in the periodic table, the alkali metal group. Rubidium is the second most reactive metal and is very soft, with a silvery-white lustre. Rubidium was discovered (1861) spectroscopically by German scientists Robert Bunsen and Gustav Kirchhoff and named after the two prominent red lines of its spectrum. Rubidium and cesium often occur together in nature. Rubidium, however, is more widely scattered and seldom forms a natural mineral; it is found only as an impurity in other minerals, ranging in content up to 5 percent in such minerals as lepidolite, pollucite, and carnallite. Brine samples have also been analyzed that contain up to 6 parts per million of rubidium. Primarily a potassium carbonate, this by-product also contains approximately 23 percent rubidium and 3 percent cesium carbonates. f a metal sample has a large enough surface area, it can burn to form superoxides. Rubidium superoxide (RbO2) is a yellow powder. Rubidium peroxides (Rb2O2) can be formed by oxidation of the metal with the required amount of oxygen. Rubidium forms two other oxides (Rb2O and Rb2O3). Natural rubidium makes up about 0.01 percent of Earth’s crust; it exists as a mixture of two isotopes: rubidium-85 (72.15 percent) and the radioactive rubidium-87 (27.85 percent), which emits beta rays with a half-life of about 6 × 1011 years. A large number of radioactive isotopes have been artificially prepared, from rubidium-79 to rubidium-95. One estimate of the age of the solar system as 4.6 billion years is based on the ratio of rubidium-87 to strontium-87 in a stony meteorite. "
      },


      "sr" : {
         elementName : "Strontium",
         elementSymbol : "(Sr)",
         atomNoTop : "38",
         elementType : "Alkali Earth Metal",
         atnNo : "38",
         atnMass : "87.62 u",
         block : "s-Block",
         discover : "Humphry Davy, Adair Crawford, Cruickshank",
         link : "https://media0.giphy.com/media/hX7PZDkJhmMahFaQhu/giphy.gif",
         desc : "Strontium (Sr), chemical element, one of the alkaline-earth metals of Group 2 (IIa) of the periodic table. It is used as an ingredient in red signal flares and phosphors and is the principal health hazard in radioactive fallout. Strontium is a soft metal like lead and, when freshly cut, has a silvery lustre. It rapidly reacts in air to take on a yellowish colour; therefore, it must be protected from oxygen for storage. It does not occur free in nature. Although it is widely distributed with calcium, there are only two principal ores of strontium alone, celestine (SrSO4) and strontianite (SrCO3). A mineral from a lead mine near the village of Strontian, in Argyll, Scotland, was originally misidentified as a type of barium carbonate, but Adair Crawford and William Cruickshank in 1789 noted that it was likely a different substance. The chemist Thomas Charles Hope named the new mineral strontites, after the village, and the corresponding “earth” (strontium oxide, SrO) was accordingly referred to as strontia. The metal was isolated (1808) by Sir Humphry Davy. Its cosmic abundance is estimated as 18.9 atoms (on a scale where the abundance of silicon = 106 atoms). It composes about 0.04 percent of Earth’s crust. In general, the chemistry of strontium is quite similar to that of calcium. In its compounds strontium has an exclusive oxidation state of +2, as the Sr2+ ion. The metal is an active reducing agent and readily reacts with halogens, oxygen, and sulfur to yield halides, oxide, and sulfide."
      },


      "y" : {
         elementName : "Yttrium",
         elementSymbol : "(Y)",
         atomNoTop : "39",
         elementType : "Transition Metal",
         atnNo : "39",
         atnMass : "88.90585 u",
         block : "d-Block",
         discover : "Johan Gadolin",
         link : "https://c8.alamy.com/comp/RN8NJT/3d-render-of-atom-structure-of-yttrium-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-as-RN8NJT.jpg",
         desc : "Yttrium (Y), chemical element, a rare-earth metal of Group 3 of the periodic table. Yttrium is a silvery white, moderately soft, ductile metal. It is quite stable in air; rapid oxidation begins above approximately 450 °C (840 °F), resulting in Y2O3. The metal readily reacts with diluted acids—except hydrofluoric acid (HF), in which the insoluble protective layer of YF3 that forms on the surface of the metal prevents further reaction. Yttrium turnings ignite readily in air, burning white-hot. The metal is paramagnetic with a temperature-independent magnetic susceptibility between 10 and 300 K (−263 and 27 °C, or −442 and 80 °F). It becomes superconducting at 1.3 K (−271.9 °C, or −457 °F) at pressures exceeding 110 kilobars. In 1794 Finnish chemist Johan Gadolin isolated yttria, a new earth or metallic oxide, from a mineral found at Ytterby, Sweden. Yttria, the first rare earth to be discovered, turned out to be a mixture of oxides from which, over a span of more than a century, nine elements—yttrium, scandium (atomic number 21), and the heavy lanthanide metals from terbium (atomic number 65) to lutetium (atomic number 71)—were separated. Yttrium occurs especially in the heavy rare-earth ores, of which laterite clays, gadolinite, euxenite, and xenotime are the most important. In the igneous rocks of Earth’s crust, this element is more plentiful than any of the other rare-earth elements except cerium and is twice as abundant as lead. Yttrium also occurs in products of nuclear fission."
      },


      "zr" : {
         elementName : "Zirconium",
         elementSymbol : "(Zr)",
         atomNoTop : "40",
         elementType : "Transition Metal",
         atnNo : "40",
         atnMass : "91.224 u",
         block : "d-Block",
         discover : "Martin Heinrich Klaproth",
         link : "https://c8.alamy.com/comp/RN8NJW/3d-render-of-atom-structure-of-zirconium-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-a-RN8NJW.jpg",
         desc : "Zirconium (Zr), chemical element, metal of Group 4 (IVb) of the periodic table, used as a structural material for nuclear reactors. Zirconium, obscure before the late 1940s, became a significant engineering material for nuclear energy applications because it is highly transparent to neutrons. The element was identified (1789) in zircon, ZrSiO4 (zirconium orthosilicate), from its oxide by the German chemist Martin Heinrich Klaproth, and the metal was isolated (1824) in impure form by the Swedish chemist Jöns Jacob Berzelius. The mineral zircon, which is generally found in alluvial deposits in stream beds, ocean beaches, or old lake beds, is the only commercial source of zirconium. Baddeleyite, which is essentially pure zirconium dioxide, ZrO2, is the only other important zirconium mineral, but the commercial product is more cheaply recovered from zircon. The atomic radii of zirconium and hafnium are 1.45 and 1.44 Å, respectively, while the radii of the ions are Zr4+, 0.74 Å, and Hf4+, 0.75 Å. The virtual identity of atomic and ionic sizes, resulting from the lanthanoid contraction, has the effect of making the chemical behaviour of these two elements more similar than for any other pair of elements known. Zirconium absorbs oxygen, nitrogen, and hydrogen in astonishing amounts. At about 800 °C (1,500 °F) it combines chemically with oxygen to yield the oxide, ZrO2. Zirconium reduces such refractory crucible materials as the oxides of magnesium, beryllium, and thorium."
      },


      "nb" : {
         elementName : "Niobium",
         elementSymbol : "(Nb)",
         atomNoTop : "41",
         elementType : "Transition Metal",
         atnNo : "41",
         atnMass : "92.90638 u",
         block : "d-Block",
         discover : "Charles Hatchett",
         link : "https://c8.alamy.com/comp/RN8NJX/3d-render-of-atom-structure-of-niobium-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-as-RN8NJX.jpg",
         desc : "Niobium (Nb), chemical element, refractory metal of Group 5 (Vb) of the periodic table, used in alloys, tools and dies, and superconductive magnets. Niobium is closely associated with tantalum in ores and in properties. Niobium was first discovered (1801) in an ore sample from Connecticut by the English chemist Charles Hatchett, who called the element columbium in honour of the country of its origin, Columbia being a synonym for the United States. Niobium is roughly 10 times more abundant in the crust of the Earth than is tantalum. Niobium, more plentiful than lead and less abundant than copper in the Earth’s crust, occurs dispersed except for relatively few minerals. Of these minerals, the columbite–tantalite series, in which columbite (FeNb2O6) and tantalite (FeTa2O6) occur in highly variable ratios, is the main commercial source. Pyrochlore, a calcium sodium niobate, is also the principal commercial source. Natural niobium occurs entirely as the stable isotope niobium-93.  In 1844 a German chemist, Heinrich Rose, discovered what he considered to be a new element occurring along with tantalum and named it niobium after Niobe, the mythological goddess who was the daughter of Tantalus. After considerable controversy it was decided that columbium and niobium were the same element. Eventually international agreement (about 1950) was reached to adopt the name niobium, though columbium persisted in the U.S. metallurgical industry. "
      },


      "mo" : {
         elementName : "Molybdenum",
         elementSymbol : "(Mo)",
         atomNoTop : "42",
         elementType : "Transition Metal",
         atnNo : "42",
         atnMass : "95.95 u",
         block : "d-Block",
         discover : "Carl Wilhelm Scheele",
         link : "https://c8.alamy.com/comp/RN8NJY/3d-render-of-atom-structure-of-molybdenum-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-RN8NJY.jpg",
         desc : "Molybdenum (Mo), chemical element, silver-gray refractory metal of Group 6 (VIb) of the periodic table, used to impart superior strength to steel and other alloys at high temperature. The Swedish chemist Carl Wilhelm Scheele had demonstrated (c. 1778) that the mineral molybdaina (now molybdenite), for a long time thought to be a lead ore or graphite, certainly contains sulfur and possibly a previously unknown metal. At Scheele’s suggestion, Peter Jacob Hjelm, another Swedish chemist, successfully isolated the metal (1782) and named it molybdenum, from the Greek molybdos, “lead.”. Molybdenum is not found free in nature. A relatively rare element, it is about as abundant as tungsten, which it resembles. For molybdenum the chief ore is molybdenite—molybdenum disulfide, MoS2—but molybdates such as lead molybdate, PbMoO4 (wulfenite), and MgMoO4 are also found. Rod or wire is used for heating elements in electric furnaces operating up to 1,700 °C (3,092 °F). Coatings of molybdenum adhere firmly to steel, iron, aluminum, and other metals and show excellent resistance to wear. Natural molybdenum is a mixture of seven stable isotopes: molybdenum-92 (15.84 percent), molybdenum-94 (9.04 percent), molybdenum-95 (15.72 percent), molybdenum-96 (16.53 percent), molybdenum-97 (9.46 percent), molybdenum-98 (23.78 percent), and molybdenum-100 (9.13 percent). Molybdenum exhibits oxidation states of +2 to +6 and is considered to display the zero oxidation state in the carbonyl Mo(CO)6. "
      },


      "tc" : {
         elementName : "Technetium",
         elementSymbol : "(Tc)",
         atomNoTop : "43",
         elementType : "Transition Metal",
         atnNo : "43",
         atnMass : "98 u",
         block : "d-Block",
         discover : "Emilio Segrè, Carlo Perrier",
         link : "https://c8.alamy.com/comp/G16HRT/symbol-and-electron-diagram-for-technetium-illustration-G16HRT.jpg",
         desc : "Technetium (Tc), chemical element, synthetic radioactive metal of Group 7 (VIIb) of the periodic table, the first element to be artificially produced. The isotope technetium-97 (4,210,000-year half-life) was discovered (1937) by the Italian mineralogist Carlo Perrier and the Italian-born American physicist Emilio Segrè in a sample of molybdenum that had been bombarded by deuterons in the Berkeley (California) cyclotron. This isotope is the longest-lived member of a set from technetium-85 to technetium-114 that has since been produced. The most important isotope, because it is the only one available on a large scale, is technetium-99 (211,000-year half-life); it is produced in kilogram quantities as a fission product in nuclear reactors.  Technetium metal looks like platinum but is usually obtained as a gray powder. It crystallizes in the hexagonal close-packed structure and is a superconductor below 11.2 K. Technetium metal looks like platinum but is usually obtained as a gray powder. It crystallizes in the hexagonal close-packed structure and is a superconductor below 11.2 K. Except for technetium-99, technetium-97, and technetium-98 (4,200,000-year half-life), technetium isotopes are short-lived. The metastable isotope technetium-99m (6-hour half-life), used with radiographic scanning devices, is valuable for studying the anatomic structure of organs. Technetium is also used as a metallurgical tracer and in corrosion-resistant products. Elements exhibiting allotropy include tin, carbon, sulfur, phosphorus, and oxygen. Tin and sulfur are enantiotropic. "
      }, 


      "ru" : {
         elementName : "Ruthenium",
         elementSymbol : "(Ru)",
         atomNoTop : "44",
         elementType : "Transition Metal",
         atnNo : "44",
         atnMass : "101.07 u",
         block : "d-Block",
         discover : "Karl Ernst Claus",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGwxNHo2NjZudzJkYmNzeXhkMTQ2aDFybGc4eWJ6cHU2NDhpdmk2YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8vqF2pDW81QCar5pqq/giphy.gif",
         desc : "Ruthenium (Ru), chemical element, one of the platinum metals of Groups 8–10 (VIIIb), Periods 5 and 6, of the periodic table, used as an alloying agent to harden platinum and palladium. Silver-gray ruthenium metal looks like platinum but is rarer, harder, and more brittle. The Russian chemist Karl Karlovich Klaus established (1844) the existence of this rare, bright metal and retained the name his countryman Gottfried Wilhelm Osann had suggested (1828) for a platinum-group element whose discovery had remained inconclusive. Ruthenium has a low crustal abundance of about 0.001 part per million. Elemental ruthenium occurs in native alloys of iridium and osmium, along with the other platinum metals: up to 14.1 percent in iridosmine and 18.3 percent in siserskite. It also occurs in sulfide and other ores (e.g., in pentlandite of the Sudbury, Ont., Can., nickel-mining region) in very small quantities that are commercially recovered. Ruthenium is found among the fission products of uranium and plutonium in nuclear reactors. Radioactive ruthenium-106 (one-year half-life) and its short-lived daughter rhodium-106 contribute an important fraction of the residual radiation in reactor fuels a year following their use. Natural ruthenium consists of a mixture of seven stable isotopes: ruthenium-96 (5.54 percent), ruthenium-98 (1.86 percent), ruthenium-99 (12.7 percent), ruthenium-100 (12.6 percent), ruthenium-101 (17.1 percent), ruthenium-102 (31.6 percent), and ruthenium-104 (18.6 percent)."
      },  


      "rh" : {
         elementName : "Rhodium",
         elementSymbol : "(Rh)",
         atomNoTop : "45",
         elementType : "Transition Metal",
         atnNo : "45",
         atnMass : "102.9055 u",
         block : "d-Block",
         discover : "William Hyde Wollaston",
         link : "https://c8.alamy.com/comp/RN8NK2/3d-render-of-atom-structure-of-rhodium-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-as-RN8NK2.jpg",
         desc : "Rhodium (Rh), chemical element, one of the platinum metals of Groups 8–10 (VIIIb), Periods 5 and 6, of the periodic table, predominantly used as an alloying agent to harden platinum. Rhodium is a precious, silver-white metal, with a high reflectivity for light. It is not corroded or tarnished by the atmosphere at room temperature and is frequently electroplated onto metal objects and polished to give permanent, attractive surfaces for jewelry and other decorative articles. The metal is also used to produce reflecting surfaces for optical instruments.  A wire of the alloy 10 percent rhodium–90 percent platinum joined to a wire of pure platinum forms an excellent thermocouple for measuring high temperatures in an oxidizing atmosphere. The international temperature scale is defined over the region from 660° to 1,063° C (1,220° to 1,945° F) by the electromotive force of this thermocouple. Rhodium is a rare element comprising up to 4.6 percent of native platinum alloys. It also occurs in native alloys of iridium and osmium: up to at least 11.25 percent in iridosmine and up to at least 4.5 percent in siserskite. Rhodium occurs in nature in association with the other platinum metals, and its separation and refinement form part of the overall metallurgical processing of the group. Rhodium is generally obtained commercially as a by-product of the extraction of nickel and copper from their ores. Rhodium chemistry centres chiefly on the +1 and +3 oxidation states; a few compounds of the other positive oxidation states through +6 are recognized. "
      },


      "pd" : {
         elementName : "Palladium",
         elementSymbol : "(Pd)",
         atomNoTop : "46",
         elementType : "Transition Metal",
         atnNo : "46",
         atnMass : "106.42 u",
         block : "d-Block",
         discover : "William Hyde Wollaston",
         link : "https://c8.alamy.com/comp/2GX1NR4/symbol-and-electron-diagram-for-palladium-2GX1NR4.jpg",
         desc : "Palladium (Pd), chemical element, the least dense and lowest-melting of the platinum metals of Groups 8–10 (VIIIb), Periods 5 and 6, of the periodic table, used especially as a catalyst (a substance that speeds up chemical reactions without changing their products) and in alloys. A precious gray-white metal, palladium is extremely ductile and easily worked. Palladium is not tarnished by the atmosphere at ordinary temperatures. Thus, the metal and its alloys serve as substitutes for platinum in jewelry and in electrical contacts; the beaten leaf is used for decorative purposes. Relatively small amounts of palladium alloyed with gold yield the best white gold. Palladium is used also in dental alloys. The chief use of palladium, however, is in automobile catalytic converters (often in combination with rhodium); the palladium serves as a catalyst to convert polluting hydrocarbons, carbon monoxide, and nitrogen oxide in the exhaust to water, carbon dioxide, and nitrogen. Palladium coatings, electrodeposited or chemically plated, have been used in printed-circuit components, and palladium is also used in multilayer ceramic capacitors. Natural palladium consists of a mixture of six stable isotopes: palladium-102 (1.02 percent), palladium-104 (11.14 percent), palladium-105 (22.33 percent), palladium-106 (27.33 percent), palladium-108 (26.46 percent), and palladium-110 (11.72 percent).  Palladium also combines with a number of nonmetallic elements on heating, such as phosphorus, arsenic, antimony, silicon, sulfur, and selenium. "
      },


      "ag" : {
         elementName : "Silver",
         elementSymbol : "(Ag)",
         atomNoTop : "47",
         elementType : "Transition Metal",
         atnNo : "47",
         atnMass : "107.8682 u",
         block : "d-Block",
         discover : "No Records",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3NuMndjaHpscWMzd2M3d2F0bTFreXFuYm5uMXF4cHNnM2RkempvNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gHhrgJEVSzqxConv23/giphy-downsized-large.gif",
         desc : "Silver (Ag), chemical element, a white lustrous metal valued for its decorative beauty and electrical conductivity. Silver is located in Group 11 (Ib) and Period 5 of the periodic table, between copper (Period 4) and gold (Period 6), and its physical and chemical properties are intermediate between those two metals. Together with gold and the platinum-group metals, silver is one of the so-called precious metals. Because of its comparative scarcity, brilliant white colour, malleability, ductility, and resistance to atmospheric oxidation, silver has long been used in the manufacture of coins, ornaments, and jewelry. Silver has the highest known electrical and thermal conductivity of all metals and is used in fabricating printed electrical circuits and as a vapour-deposited coating for electronic conductors; it is also alloyed with such elements as nickel or palladium for use in electrical contacts. Silver also finds use as a catalyst for its unique ability to convert ethylene to ethylene oxide, which is a precursor of many organic compounds. Silver is one of the noblest—that is, least chemically reactive—of the transition elements. The metal constitutes 0.05 part per million of Earth’s crust.Sterling silver contains 92.5 percent of silver and 7.5 percent of another metal, usually copper; i.e., it has a fineness of 925. Jewelry silver is an alloy containing 80 percent silver and 20 percent copper (800 fine). The yellow gold that is used in jewelry is composed of 53 percent gold, 25 percent silver, and 22 percent copper.  "
      },


      "cd" : {
         elementName : "Cadmium",
         elementSymbol : "(Cd)",
         atomNoTop : "48",
         elementType : "Transition Metal",
         atnNo : "48",
         atnMass : "112.411 u",
         block : "d-Block",
         discover : "Friedrich Stromeyer, Karl Samuel Hermann",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG1xc3IwbXAwMGFvcmtla2ppMGs5dXRhcjU3OGk5aTN0cWprbzlxciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cKJblApSczRONTOZdP/giphy-downsized-large.gif",
         desc : "Cadmium (Cd), chemical element, a metal of Group 12 (IIb, or zinc group) of the periodic table. Silver-white and capable of taking a high polish, cadmium is nearly as soft as tin and, like tin, emits a crackling sound when bent; it can be rolled out into sheets. Cadmium melts and boils at relatively low temperatures; its vapour is deep yellow and monatomic. The metal is permanent in dry air, becomes coated with the oxide in moist air, burns on heating to redness, and is readily soluble in mineral acids. Most cadmium is recovered in one of these three processes. China, South Korea, Canada, Japan, and Kazakhastan led the world in cadmium refinement in the early 21st century. An important application of cadmium is its use as the anode with either nickel or silver oxide as the cathode and a caustic potash electrolyte in rechargeable electrical storage batteries for uses in which lower weight, longer life, and stability upon storage in discharged condition are desirable as in aircraft. Cadmium combines with many heavy metals to yield alloys; the most important are bearing alloys and low-melting alloys used for brazing. The small quantities of cadmium added to the heavy metals strengthen them. One percent added to copper increases its strength and hardness with only a small reduction in electrical conductivity. Alloyed with zinc, cadmium forms solders with good shear strength. Because it efficiently absorbs thermal neutrons, it is used in control rods for some nuclear reactors. "
      },


      "in" : {
         elementName : "Indium",
         elementSymbol : "(In)",
         atomNoTop : "49",
         elementType : "Post-transition Metal",
         atnNo : "49",
         atnMass : "114.818 u",
         block : "p-Block",
         discover : "Ferdinand Reich",
         link : "https://c8.alamy.com/comp/RN8NP5/3d-render-of-atom-structure-of-indium-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-as-b-RN8NP5.jpg",
         desc : "Indium (In), chemical element, rare metal of main Group 13 (IIIa, or boron group) of the periodic table. Indium has a brilliant silvery-white lustre. It was discovered (1863) by German chemists Ferdinand Reich and Hieronymus Theodor Richter while they were examining zinc ore samples. The presence of a predominant indigo spectral line suggested the name. Indium is softer than lead and quite plastic. It can be scratched with a fingernail and can undergo almost limitless deformation. Like tin, the pure metal emits a high-pitched “cry” when bent. Indium is about as rare as silver. Earth’s crust contains on the average about 0.05 part per million indium by weight. The element does not occur uncombined or in independent minerals but occurs as a trace in many minerals, particularly those of zinc and lead, from which it is obtained as a by-product. Indium has the unusual property when molten of clinging to (wetting) clean glass and other surfaces; this makes it valuable for producing hermetic seals between glass, metals, quartz, ceramics, and marble.  Natural indium is a mixture of two isotopes: indium-113 (4.28 percent) and indium-115 (95.72 percent). Indium metal is unaffected by air at ordinary temperatures, but at a red heat it burns with a blue-violet flame to form the yellow oxide In2O3. This oxide is easily reduced to the metal, and on strong heating it loses oxygen to give the monoxide, In2O, where indium is in the +1 oxidation state. Indium hydroxide dissolves in both acids and alkalies."
      },        


      "sn" : {
         elementName : "Tin",
         elementSymbol : "(Sn)",
         atomNoTop : "50",
         elementType : "Post-transition Metal",
         atnNo : "50",
         atnMass : "118.71 u",
         block : "p-Block",
         discover : "No Record",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3Vic2Y4ZHhvZjc4ZHZqanNkcnhuZjFoNjNuNzlob3IyNnd3bnZrZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VFenXo78YC7X5TvUGg/giphy-downsized-large.gif",
         desc : "Tin (Sn), a chemical element belonging to the carbon family, Group 14 (IVa) of the periodic table. It is a soft, silvery white metal with a bluish tinge, known to the ancients in bronze, an alloy with copper. Tin is widely used for plating steel cans used as food containers, in metals used for bearings, and in solder. The origins of tin are lost in antiquity. Bronzes, which are copper–tin alloys, were used by humans in prehistory long before pure tin metal itself was isolated. Bronzes were common in early Mesopotamia, the Indus valley, Egypt, Crete, Israel, and Peru. Much of the tin used by the early Mediterranean peoples apparently came from the Scilly Isles and Cornwall in the British Isles, where tin mining dates to at least 300–200 BCE. The element is present in the igneous rocks of Earth’s crust to the extent of about 0.001 percent, which is scarce but not rare; its abundance is of the same order of magnitude as such technically useful elements as cobalt, nickel, copper, cerium, and lead, and it is essentially equal to the abundance of nitrogen. In the cosmos there are 1.33 atoms of tin per 1 × 106 atoms of silicon, an abundance roughly equal to that of niobium, ruthenium, neodymium, or platinum. Cosmically, tin is a product of neutron absorption. Its richness in stable isotopes is noteworthy. The element is present in the igneous rocks of Earth’s crust to the extent of about 0.001 percent, which is scarce but not rare; its abundance is of the same order of magnitude as such technically useful elements as cobalt, nickel, copper, cerium, and lead, and it is essentially equal to the abundance of nitrogen. "
      },    


      "sb" : {
         elementName : "Antimony",
         elementSymbol : "(Sb)",
         atomNoTop : "51",
         elementType : "Metalloid",
         atnNo : "51",
         atnMass : "121.76 u",
         block : "p-Block",
         discover : "Arabic alchemists",
         link : "https://c8.alamy.com/comp/RN8NP7/3d-render-of-atom-structure-of-antimony-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-as-RN8NP7.jpg",
         desc : "Antimony (Sb), a metallic element belonging to the nitrogen group (Group 15 [Va] of the periodic table). Antimony exists in many allotropic forms (physically distinct conditions that result from different arrangements of the same atoms in molecules or crystals). Antimony is a lustrous silvery bluish white solid that is very brittle and has a flaky texture. It occurs chiefly as the gray sulfide mineral stibnite (Sb2S3). The ancients were familiar with antimony both as a metal and in its sulfide form. Fragments of a Chaldean vase made of antimony have been estimated to date to about 4000 BCE.  Records of the 15th century show the use of the substance in alloys for type, bells, and mirrors. In 1615 Andreas Libavius, a German physician, described the preparation of metallic antimony by the direct reduction of the sulfide with iron, and a chemistry textbook published in 1675 by Nicolas Lémery also describes methods of preparation of the element. The most important of these is stibnite, Sb2S3. Stibnite deposits are found in Algeria, Bolivia, China, Mexico, Peru, South Africa, and parts of the Balkan Peninsula. Some economic value also attaches to kermesite (2Sb2S3 · Sb2O3), argentiferous tetrahedrite [(Cu,Fe)12Sb4S13], livingstonite (HgSb4S7), and jamesonite (Pb4FeSb6S14). Antimony compounds (especially the trioxide) are widely used as flame retardants in paints, plastics, rubber, and textiles. Several other antimony compounds are used as paint pigments, and tartar emetic (an organic salt of antimony)"
      },

      "te" :{
         elementName : "Tellurium",
         elementSymbol : "(Te)",
         atomNoTop : "52",
         elementType : "Metalloid",
         atnNo : "52",
         atnMass : "127.6 u",
         block : "p-Block",
         discover : "Martin Heinrich Klaproth, Franz-Joseph Müller ",
         link : "https://c8.alamy.com/comp/RN8NP8/3d-render-of-atom-structure-of-tellurium-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-a-RN8NP8.jpg",
         desc : "Tellurium (Te), semimetallic chemical element in the oxygen group (Group 16 [VIa] of the periodic table), closely allied with the element selenium in chemical and physical properties. Tellurium is a silvery white element with properties intermediate between those of metals and nonmetals; it makes up approximately one part per billion of Earth’s crust. Like selenium, it is less often found uncombined than as compounds of metals such as copper, lead, silver, or gold and is obtained chiefly as a by-product of the refining of copper or lead. No large use for tellurium has been found. The element tellurium was isolated before it was actually known to be an elemental species. About 1782 Franz Joseph Müller von Reichenstein, an Austrian mineralogist, worked with an ore referred to as German gold. From this ore he obtained a material that defied his attempts at analysis and was called by him metallum problematicum. In 1798 Martin Heinrich Klaproth confirmed Müller’s observations and established the elemental nature of the substance. He named the element after man’s “heavenly body” Tellus, or Earth. The demand for tellurium does not match that for selenium. The two elements are found together in many ores; they may be isolated by employing the processes described in connection with selenium, obtaining solutions containing salts of both selenious and tellurous acids, H2SeO3 and H2TeO3. Upon treatment of these solutions with sulfuric acid, tellurium dioxide, TeO2, separates because of its low solubility, while the selenious acid remains dissolved."
      },

      "i" :{
         elementName : "Iodine",
         elementSymbol : "(I)",
         atomNoTop : "53",
         elementType : "Reactive Nonmetal",
         atnNo : "53",
         atnMass : "126.90447 u",
         block : "p-Block",
         discover : "Bernard Courtois",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmd5YmR1amRmeGo4M3lwNjVpbmxyaWZnY2RsN3F0eXczZ3g4YWh0dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hvGeeLiwlGPByRYiho/giphy-downsized-large.gif",
         desc : "Iodine is a nonmetallic, nearly black solid at room temperature and has a glittering crystalline appearance. The molecular lattice contains discrete diatomic molecules, which are also present in the molten and the gaseous states. Above 700 °C (1,300 °F), dissociation into iodine atoms becomes appreciable. Iodine has a moderate vapour pressure at room temperature and in an open vessel slowly sublimes to a deep violet vapour that is irritating to the eyes, nose, and throat. (Highly concentrated iodine is poisonous and may cause serious damage to skin and tissues.). Iodine gives a red solution in benzene, which is regarded as the result of a different type of charge-transfer complex. In inert solvents, such as carbon tetrachloride or carbon disulfide, violet-coloured solutions that contain uncoordinated iodine molecules are obtained. Iodine reacts also with iodide ions, because the latter can act as Lewis bases, and for this reason the solubility of iodine in water is greatly enhanced in the presence of an iodide. When cesium iodide is added, crystalline cesium triiodide may be isolated from the reddish brown aqueous solution. Iodine forms a blue complex with starch, and this colour test is used to detect small amounts of iodine. The first ionization potential of the iodine atom is considerably smaller than that of the lighter halogen atoms, and this is in accord with the existence of numerous compounds containing iodine in the positive oxidation states +1 (iodides), +3, +5 (iodates), and +7 (periodates)."

      },


      "xe" :{
         elementName : "Xenon",
         elementSymbol : "(Xe)",
         atomNoTop : "54",
         elementType : "Noble Gas",
         atnNo : "54",
         atnMass : "131.293 u",
         block : "p-Block",
         discover : "William Ramsay, Morris Travers",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnA0ZzJoNGxoZXJjOWdqNHN1bGJvYWFianE2ZTZta3VtYm9yZ3c2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MCvKi08Bs5Es0jVCfC/giphy-downsized-large.gif",
         desc : "Xenon (Xe), chemical element, a heavy and extremely rare gas of Group 18 (noble gases) of the periodic table. It was the first noble gas found to form true chemical compounds. More than 4.5 times heavier than air, xenon is colourless, odourless, and tasteless. Solid xenon belongs to the face-centred cubic crystal system, which implies that its molecules, which consist of single atoms, behave as spheres packed together as closely as possible. The name xenon is derived from the Greek word xenos, “strange” or “foreign.”. Xenon occurs in slight traces in gases within Earth and is present to an extent of about 0.0000086 percent, or about 1 part in 10 million by volume of dry air. Like several other noble gases, xenon is present in meteorites. Xenon is manufactured on a small scale by the fractional distillation of liquid air. It is the least volatile (boiling point, −108.0 °C [−162.4 °F]) of the noble gases obtainable from the air. The British chemists Sir William Ramsay and Morris W. Travers isolated the element in 1898 by repeated fractional distillation of the noble gas krypton, which they had discovered six weeks previously. Natural xenon is a mixture of nine stable isotopes in the following percentages: xenon-124 (0.096), xenon-126 (0.090), xenon-128 (1.92), xenon-129 (26.44), xenon-130 (4.08), xenon-131 (21.18), xenon-132 (26.89), xenon-134 (10.44), and xenon-136 (8.87).  The xenon isotopes produced in the greatest amount by nuclear fission are xenon-131, -132, -134, and -136, which are stable, and xenon-133 "

      },

      "cs" :{
         elementName : "Caesium",
         elementSymbol : "(Cs)",
         atomNoTop : "55",
         elementType : "Alkali Metal",
         atnNo : "55",
         atnMass : "132.9054519 u",
         block : "s-Block",
         discover : "Gustav Kirchhoff, Robert Bunsen",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGUzY2xjcmhudGYyZTh1ZXdzeDJvYmxoN3ltZGJoZ253cDMyeWc1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KEGb7LBipW1pVcPt4v/giphy-downsized-large.gif",
         desc : "Cesium (Cs), also spelled caesium, chemical element of Group 1 (also called Group Ia) of the periodic table, the alkali metal group, and the first element to be discovered spectroscopically (1860), by German scientists Robert Bunsen and Gustav Kirchhoff, who named it for the unique blue lines of its spectrum (Latin caesius, “sky-blue”). This silvery metal with a golden cast is the most reactive and one of the softest of all metals. It melts at 28.4 °C (83.1 °F), just above room temperature. It is about half as abundant as lead and 70 times as abundant as silver. Cesium occurs in minute quantities (7 parts per million) in Earth’s crust in the minerals pollucite, rhodizite, and lepidolite. Pollucite (Cs4Al4Si9O26∙H2O) is a cesium-rich mineral resembling quartz. It contains 40.1 percent cesium on a pure basis, and impure samples are ordinarily separated by hand-sorting methods to greater than 25 percent cesium. Large pollucite deposits have been found in Zimbabwe and in the lithium-bearing pegmatites at Bernic Lake, Manitoba, Canada. Rhodizite is a rare mineral found in low concentrations in lepidolite and in salt brines and saline deposits. Atomic cesium is employed in the world’s time standard, the cesium clock. The microwave spectral line emitted by the isotope cesium-133 has a frequency of 9,192,631,770 hertz (cycles per second). This provides the fundamental unit of time. Cesium clocks are so stable and accurate that they are reliable to 1 second in 1.4 million years. Primary standard cesium clocks, such as NIST-F1 in Boulder, Colo., are about as large as a railroad flatcar."
      },

      "ba" :{
         elementName : "Barium",
         elementSymbol : "(Ba)",
         atomNoTop : "56",
         elementType : "Alkali Earth Metal",
         atnNo : "56",
         atnMass : "137.327 u",
         block : "s-Block",
         discover : "Humphry Davy, Carl Wilhelm Scheele",
         link : "https://c8.alamy.com/comp/RN8NPP/3d-render-of-atom-structure-of-barium-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-as-b-RN8NPP.jpg",
         desc : "Barium (Ba), chemical element, one of the alkaline-earth metals of Group 2 (IIa) of the periodic table. The element is used in metallurgy, and its compounds are used in pyrotechnics, petroleum production, and radiology. Barium, which is slightly harder than lead, has a silvery white lustre when freshly cut. It readily oxidizes when exposed to air and must be protected from oxygen during storage. In nature it is always found combined with other elements. The Swedish chemist Carl Wilhelm Scheele discovered (1774) a new base (baryta, or barium oxide, BaO) as a minor constituent in pyrolusite, and from that base he prepared some crystals of barium sulfate, which he sent to Johan Gottlieb Gahn, the discoverer of manganese. A month later Gahn found that the mineral barite is also composed of barium sulfate, BaSO4. A particular crystalline form of barite found near Bologna, Italy, in the early 17th century, after being heated strongly with charcoal, glowed for a time after exposure to bright light. The phosphorescence of “Bologna stones” was so unusual that it attracted the attention of many scientists of the day, including Galileo. Only after the electric battery became available could Sir Humphry Davy finally isolate (1808) the element itself by electrolysis.  Ironically, metallic barium is comparatively light, only 30 percent denser than aluminum. Its cosmic abundance is estimated as 3.7 atoms (on a scale where the abundance of silicon = 106 atoms). Barium constitutes about 0.03 percent of Earth’s crust, chiefly as the minerals barite and witherite. "
      },

      "la" :{
         elementName : "Lanthanum",
         elementSymbol : "(La)",
         atomNoTop : "57",
         elementType : "Lanthanide",
         atnNo : "57",
         atnMass : "138.90547 u",
         block : "f-Block",
         discover : "Carl Gustaf Mosander",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHpoenoxN2NyZ3BiZWkwNnExaTN1aHhzdzVrNjV2c25wbW9wNTMwayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2ukJ1JsmDv1btHlfj/giphy-downsized-large.gif",
         desc : "Lanthanum (La), chemical element, a rare-earth metal of Group 3 of the periodic table, that is the prototype of the lanthanide series of elements. Lanthanum is a ductile and malleable silvery white metal that is soft enough to be cut with a knife. It is the second most reactive of the rare-earth metals after europium. Lanthanum oxidizes in air at room temperature to form La2O3. It slowly reacts with water and quickly dissolves in diluted acids, except hydrofluoric acid (HF) because of formation of a protective fluoride (LaF3) layer on the surface of the metal. The metal is paramagnetic from 6 K (−267 °C, or −449 °F) to its melting point at 1,191 K (918 °C, or 1,684 °F) with a nearly temperature-independent magnetic susceptibility between 4 and 300 K (−269 and 27 °C, or −452 and 80 °F). Lanthanum becomes superconducting at atmospheric pressure below 6.0 K (−267.2 °C, or −448.9 °F) in the face-centred cubic β-phase or 5.1 K (−268.1 °C, or −450.5 °F) in the double close-packed hexagonal α-phase. Two isotopes occur in nature: stable lanthanum-139 (99.9119 percent) and very long-lived radioactive lanthanum-138 (0.0888 percent). A total of 38 radioactive isotopes of lanthanum (excluding nuclear isomers) have been characterized, ranging in mass from 117 to 155 and in half-life from 23.5 milliseconds (lanthanum-117) to 1.02 × 1011 years (lanthanum-138). The isotope lanthanum-140 has been detected as a fission product in snow after nuclear test explosions. Highly purified lanthanum oxide is an ingredient in the manufacture of low-dispersion, high-refraction glasses for lens components. "
      },


      "ce" :{
         elementName : "Cerium",
         elementSymbol : "(Ce)",
         atomNoTop : "58",
         elementType : "Lanthanide",
         atnNo : "58",
         atnMass : "140.116 u",
         block : "f-Block",
         discover : "Jöns Jacob Berzelius, Martin Heinrich",
         link : "https://c8.alamy.com/comp/2GXE0DN/symbol-and-electron-diagram-for-cerium-2GXE0DN.jpg",
         desc : "Cerium (Ce), chemical element, the most abundant of the rare-earth metals. Commercial-grade cerium is iron-gray in colour, silvery when in a pure form, and about as soft and ductile as tin. It oxidizes in air at room temperature to form CeO2. The metal slowly reacts with water, and it quickly dissolves in diluted acids, except hydrofluoric acid (HF) that leads to the formation of the protective fluoride (CeF3) layer on the surface of the metal. Cerium turnings (from when the metal is filed, ground, or machined) easily self-ignite in air, burning white-hot. Its pyrophoric nature accounts for one of its important metallurgical applications in lighter flints. The metal should be stored either in vacuum or in an inert atmosphere. The metal is a moderately strong paramagnet both below and above room temperature and becomes antiferromagnetic below 13 K (−260 °C, or −436 °F). It becomes superconducting in the millikelvin range at pressures exceeding 20 kbar. Four isotopes occur in nature: stable cerium-140 (88.45 percent) and radioactive cerium-142 (11.11 percent), cerium-138 (0.25 percent), and cerium-136 (0.19 percent). Excluding nuclear isomers, a total of 38 radioactive isotopes of cerium have been characterized. They range in mass from 119 to 157 with half-lives as short as 1.02 seconds for cerium-151 and as long as 5 × 1016 years for cerium-142. Cerium as the oxide (ceria) was discovered in 1803 by Swedish chemists Jöns Jacob Berzelius and Wilhelm Hisinger, working together, and independently by German chemist Martin Klaproth. "
      },

      
      "pr" :{
         elementName : "Prasedymium",
         elementSymbol : "(Pr)",
         atomNoTop : "59",
         elementType : "Lanthanide",
         atnNo : "59",
         atnMass : "140.90765 u",
         block : "f-Block",
         discover : "Carl Auer von Welsbach",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDd0OWlrcDdqczQwNG9iNjY0ZjJ1aGtidDlpcm9uM3JyM2N1ajR5MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/f7esW3jp8afC5thJqE/giphy-downsized-large.gif",
         desc : "Praseodymium (Pr), chemical element, a rare-earth metal of the lanthanide series of the periodic table. Praseodymium is a moderately soft, ductile, and malleable silvery white metal. It rapidly displaces hydrogen from water in diluted acids (except hydrofluoric acid [HF]) and slowly oxidizes in air, developing a green-yellowish oxide coating with complex and varying stoichiometry that can be expressed using a generic formula PrOx (1.5 ≤ x ≤ 2). The metal is best stored sealed in a plastic covering either in vacuum or in an inert atmosphere. Praseodymium is strongly paramagnetic, and an unstrained single-crystal sample will order antiferromagnetically at 0.03 K (−273.12 °C, or −459.62 °F). However, if praseodymium is strained, it may order at temperatures as high as about 20 K (−253 °C, or −424 °F). Natural praseodymium is entirely the stable isotope praseodymium-141. Excluding nuclear isomers, a total of 38 radioactive isotopes of praseodymium have been reported. They range in mass from 121 to 159 and have half-lives from 10 milliseconds (praseodymium-121) to 13.57 days (praseodymium-143). Praseodymium is a minor constituent of misch metal, which is used to make lighter flints and as alloying additions to ferrous and nonferrous alloys. The metal is also used as an addition to Nd2Fe14B permanent magnet alloys leading to a reduction of the amount of neodymium required. Praseodymium-stabilized zirconia (ZrO2) is the foundation of synthetic green-coloured gems. "
      },

      "nd" :{
         elementName : "Neodymium",
         elementSymbol : "(Nd)",
         atomNoTop : "60",
         elementType : "Lanthanide",
         atnNo : "60",
         atnMass : "144.242 u",
         block : "f-Block",
         discover : "Carl Auer von Welsbach",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnRsdTM3Nm5iMjBoc280bHMyanVvZ3hhdGxqYmljaW1ycmI5emtpbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Jmh4MQB5dieTXrGYDO/giphy-downsized-large.gif",
         desc : "Neodymium (Nd), chemical element, a rare-earth metal of the lanthanide series of the periodic table. Neodymium is a ductile and malleable silvery white metal. It oxidizes readily in air to form an oxide, Nd2O3, which easily spalls, exposing the metal to further oxidation. The metal must be stored sealed in a plastic covering or kept in vacuum or in an inert atmosphere. It reacts gradually with mineral acids—except hydrofluoric acid (HF), in which it forms a protective layer of trifluoride, NdF3. Neodymium is strongly paramagnetic and orders antiferromagnetically at 7.5 and 19.9 K (−265.7 and −253.3 °C, or −446.2 and −423.9 °F) with spontaneous magnetic moments developing separately on different independent sites, hexagonal and cubic, respectively. Austrian chemist Carl Auer von Welsbach discovered neodymium in 1885 by separating ammonium didymium nitrate prepared from didymia (a mixture of rare-earth oxides) into a neodymium fraction and a praseodymium fraction by repeated crystallization. Of the rare earths, only yttrium, lanthanum, and cerium are more plentiful than neodymium. Natural neodymium is a mixture of seven different isotopes. Five of them are stable—neodymium-142 (27.13 percent), neodymium-146 (17.19 percent), neodymium-143 (12.18 percent), neodymium-145 (8.30 percent), and neodymium-148 (5.76 percent)—and two are radioactive, neodymium-144 (23.80 percent) and neodymium-150 (5.64 percent)."
      },

      "pm" :{
         elementName : "Promethium",
         elementSymbol : "(Pm)",
         atomNoTop : "61",
         elementType : "Lanthanide",
         atnNo : "61",
         atnMass : "145 u",
         block : "f-Block",
         discover : "Jacob A. Marinsky, Charles D. Coryell",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTRpbW9qOGw1cmN5Y2c1ZDQ0ZjI4MTB1eHdrdHZmem14ZGpjaW01eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/duQKVmRxTDV0V4RZWe/giphy-downsized-large.gif",
         desc : "Promethium (Pm), chemical element, the only rare-earth metal of the lanthanide series of the periodic table not found in nature on Earth. Conclusive chemical proof of the existence of promethium, the last of the rare-earth elements to be discovered, was obtained in 1945 (but not announced until 1947) by American chemists Jacob A. Marinsky, Lawrence E. Glendenin, and Charles D. Coryell, who isolated the radioactive isotopes promethium-147 (2.62-year half-life) and promethium-149 (53-hour half-life) from uranium fission products at Clinton Laboratories (now Oak Ridge National Laboratory) in Tennessee. Identification was firmly established by ion-exchange chromatography. (Earlier investigators thought that they had found the element with atomic number 61 in naturally occurring rare earths and had prematurely called it illinium and florentium). Promethium-147 is effectively separated from the other rare-earth fission products by an ion-exchange method. Promethium has also been prepared by slow neutron bombardment of the isotope neodymium-146; the resulting isotope, neodymium-147, decays by electron emission to promethium-147. All the isotopes of promethium are unstable; the longest-lived is promethium-145 (17.7-year half-life). Excluding nuclear isomers, a total of 38 radioactive isotopes of promethium are known. They range in mass from 126 to 163. The known uses of promethium are due to its radioactivity."
      },

      "sm" :{
         elementName : "Samarium",
         elementSymbol : "(Sm)",
         atomNoTop : "62",
         elementType : "Lanthanide",
         atnNo : "62",
         atnMass : "150.36 u",
         block : "f-Block",
         discover : "Paul-Émile Lecoq de Boisbaudran",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanljemZvdjV6aTNhbms1MXJkZXlodHBiZGc4MzNmZ3FmMGg5YW1iayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ighOG4POrV89X7JvyB/giphy-downsized-large.gif",
         desc : "Samarium (Sm), chemical element, a rare-earth metal of the lanthanide series of the periodic table. Samarium is a moderately soft metal, silvery white in colour. It is relatively stable in air, slowly oxidizing to Sm2O3. It rapidly dissolves in diluted acids—except hydrofluoric acid (HF), in which it is stable because of formation of a protective trifluoride (SmF3) layer. Samarium is a moderately strong paramagnet above 109 K (−164 °C, or −263 °F). Below 109 K, antiferromagnetic order develops for the cubic sites in the samarium lattice, and the hexagonal site atoms finally order antiferromagnetically below 14 K (−259 °C, or −434 °F). Samarium was isolated as an impure oxide and spectroscopically identified as a new element in 1879 by French chemist Paul-Émile Lecoq de Boisbaudran. Samarium occurs in many other rare-earth minerals but is almost exclusively obtained from bastnasite; it is also found in products of nuclear fission. In Earth’s crust, samarium is as abundant as tin. The seven naturally occurring isotopes of samarium are samarium-144 (3.1 percent), samarium-147 (15.0 percent), samarium-148 (11.2 percent), samarium-149 (13.8 percent), samarium-150 (7.4 percent), samarium-152 (26.8 percent), and samarium-154 (22.0 percent). Samarium-144, samarium-150, samarium-152, and samarium-154 are stable, but the other three naturally occurring isotopes are alpha emitters. In addition to its more stable +3 oxidation state, samarium, unlike most of the rare earths, has a +2 oxidation state. The Sm2+ ion is a powerful reducing agent that rapidly reacts with oxygen, water, or hydrogen ions."
      },

      "eu" :{
         elementName : "Europium",
         elementSymbol : "(Eu)",
         atomNoTop : "63",
         elementType : "Lanthanide",
         atnNo : "63",
         atnMass : "151.964 u",
         block : "f-Block",
         discover : "Paul-Émile Lecoq de Boisbaudran",
         link : "https://media0.giphy.com/media/TJsGKAnVPuo8vT54cu/200w.gif?cid=82a1493b8coqei4ermp9efcrq9176lyqx6gjqkrk0eskfv95&ep=v1_gifs_related&rid=200w.gif&ct=g",
         desc : "Europium (Eu), chemical element, a rare-earth metal of the lanthanide series of the periodic table. Europium is the least dense, the softest, and the most volatile member of the lanthanide series. The pure metal is silvery, but after even a short exposure to air it becomes dull, because it readily oxidizes in air to form Eu(OH)2 ∙ H2O. Europium quickly reacts with water and diluted acids—except hydrofluoric acid (HF), in which it is protected by a layer of EuF3. Europium is a very strong paramagnet above about 90 K (−183 °C, or −298 °F); below that temperature the metal orders antiferromagnetically, forming a spiral structure. The element was discovered in 1901 by French chemist Eugène-Anatole Demarçay and named for Europe. One of the least abundant rare earths (its concentration in Earth’s crust is nearly the same as bromine’s), it occurs in minute amounts in many rare-earth minerals such as monazite and bastnasite and also in the products of nuclear fission. Both of its naturally occurring isotopes are stable: europium-151 (47.81 percent) and europium-153 (52.19 percent). A total of 34 (excluding nuclear isomers) radioactive isotopes, varying in mass from 130 to 165 and having half-lives as short as 0.9 millisecond (europium-130) and as long as 36.9 years (europium-150), have been characterized. Europium is usually separated from the other rare earths by reducing it to the +2 oxidation state and precipitating it with sulfate ions. The metal has been prepared by electrolysis of the fused halides and by reduction of its oxide by lanthanum metal followed by distillation of the europium metal."
      },

      "gd" :{
         elementName : "Gadolinium",
         elementSymbol : "(Gd)",
         atomNoTop : "64",
         elementType : "Lanthanide",
         atnNo : "64",
         atnMass : "157.25 u",
         block : "f-Block",
         discover : "Paul-Émile Lecoq de Boisbaudran, Jean Charles",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODBwdTNqejBrdTNwcGxmb2FmZjB1NmU3MHczNmQyczkzamFwY2FmZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h7jTSG03ijLT2NSBkT/giphy-downsized-large.gif",
         desc : "Gadolinium (Gd), chemical element, a rare-earth metal of the lanthanide series of the periodic table. Gadolinium is a moderately ductile, moderately hard, silvery white metal that is fairly stable in air, although with time it tarnishes in air, forming a thin film of Gd2O3 on the surface. Gadolinium reacts slowly with water and rapidly with diluted acids—except hydrofluoric acid (HF), in which a stable protective layer of GdF3 forms and prevents the metal from further reaction. Gadolinium is the only lanthanide that is ferromagnetic near room temperature; its Curie point (ferromagnetic ordering) is 293 K (20 °C, or 68 °F). Above this temperature the metal is a very strong paramagnet. Gadolinium was discovered by Jean-Charles Galissard de Marignac and Paul-Émile Lecoq de Boisbaudran. Marignac separated (1880) a new rare earth (metallic oxide) from the mineral samarskite, and Lecoq de Boisbaudran obtained (1886) a fairly pure sample of the same earth, which with Marignac’s assent he named gadolinia, after a mineral in which it occurs that in turn had been named for the Finnish chemist Johan Gadolin. Gadolinium occurs in many minerals along with the other rare earths but is obtained primarily from bastnasite. It is also found in products of nuclear fission. In Earth’s crust gadolinium is as abundant as nickel and arsenic. The major uses of gadolinium compounds include hosts for phosphors for fluorescent lamps, X-ray intensifying screens, and scintillators for X-ray tomography, and as a magnetic resonance imaging (MRI) contrast agent (in the form of water-soluble chelates). "
      },

      "tb" :{
         elementName : "Terbium",
         elementSymbol : "(Tb)",
         atomNoTop : "65",
         elementType : "Lanthanide",
         atnNo : "65",
         atnMass : "158.92535 u",
         block : "f-Block",
         discover : "Carl Gustaf Mosander",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXE2YjV0M3ZzcjVpeXN5ZTl4ejhnaWVyeHI4Z2tiaWUyeWVic25xayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WQHYy2Xr4UIeREN3sS/giphy-downsized-large.gif",
         desc : "Terbium (Tb), chemical element, a rare-earth metal of the lanthanide series of the periodic table. Terbium is a moderately hard, silvery white metal that is stable in air when in pure form. The metal is relatively stable in air even at high temperatures, because of formation of a tight, dark oxide layer that can be represented as a mixed oxide composed of Tb2O3 and TbO2. Terbium readily reacts with diluted acids, but it is insoluble in hydrofluoric acid (HF) because the presence of the fluoride ion protects the metal from further reaction by forming a protective layer of TbF3. The metal is a very strong paramagnet above 230 K (−43 °C, or −46 °F); it is antiferromagnetic between 220 K (−53 °C, or −64 °F) and 230 K, and it becomes ferromagnetic below 220 K. The element was discovered in 1843 by Swedish chemist Carl Gustaf Mosander in a heavy rare-earth fraction called yttria, but its existence was not confirmed for at least 30 years, and pure compounds were not prepared until 1905. Terbium occurs in many rare-earth minerals but is almost exclusively obtained from bastnasite and from laterite ion-exchange clays. It is also found in the products of nuclear fission. Terbium is one of the least abundant of the rare earths; its abundance in Earth’s crust is about the same as thallium. The only isotope occurring in ores is terbium-159. A total of 36 (excluding nuclear isomers) radioactive isotopes of terbium have been identified. Their mass ranges from 135 to 171 with half-life ranging from more than 200 nanoseconds (terbium-138) to 180 years (terbium-158). "
      },

      "dy" :{
         elementName : "Dysprosium",
         elementSymbol : "(Dy)",
         atomNoTop : "66",
         elementType : "Lanthanide",
         atnNo : "66",
         atnMass : "162.5 u",
         block : "f-Block",
         discover : "Paul-Émile Lecoq de Boisbaudran",
         link : "https://c8.alamy.com/comp/G16HN3/symbol-and-electron-diagram-for-iodine-illustration-G16HN3.jpg",
         desc : "Dysprosium (Dy), chemical element, a rare-earth metal of the lanthanide series of the periodic table. Dysprosium is a relatively hard metal and is silvery white in its pure form. It is quite stable in air, remaining shiny at room temperature. Dysprosium turnings ignite easily and burn white-hot. The metal slowly reacts with water and quickly dissolves in diluted acids—except hydrofluoric acid (HF), in which it forms a protective layer of insoluble DyF3. The metal is a very strong paramagnet above approximately 180 K (−93 °C, or −136 °F); it is antiferromagnetic between about 90 (−183 °C, or −298 °F) and 180 K and ferromagnetic below 90 K. French chemist Paul-Émile Lecoq de Boisbaudran first found this element (1886) associated with holmium and other heavy lanthanides; French chemist Georges Urbain later (1906) was able to prepare a reasonably pure fraction. Some important mineral sources of dysprosium are laterite ionic clays, xenotime, fergusonite, gadolinite, euxenite, polycrase, and blomstrandine. It also occurs in the products of nuclear fission. The naturally occurring isotopes are all stable and have mass numbers 164 (natural abundance 28.3 percent), 162 (25.5 percent), 163 (24.9 percent), 161 (18.9 percent), 160 (2.33 percent), 158 (0.10 percent), and 156 (0.06 percent). Excluding nuclear isomers, a total of 29 radioactive isotopes of dysprosium are known. They range in mass from 138 to 173. The least stable is dysprosium-139 (half-life 0.6 second), and the most stable is dysprosium-154 (half-life 3.0 × 106 years)."
      },


      "ho" :{
         elementName : "Holmium",
         elementSymbol : "(Ho)",
         atomNoTop : "67",
         elementType : "Lanthanide",
         atnNo : "67",
         atnMass : "164.93032 u",
         block : "f-Block",
         discover : "Per Teodor Cleve, Marc Delafontaine",
         link : "https://c8.alamy.com/comp/2GR5RW5/symbol-and-electron-diagram-for-holmium-2GR5RW5.jpg",
         desc : "Holmium (Ho), chemical element, a rare-earth metal of the lanthanide series of the periodic table. Holmium is a moderately hard, silvery white metal that is relatively stable in air. It readily reacts with diluted acids but does not react with either diluted or concentrated hydrofluoric acid (HF), due to formation of a protective surface layer of HoF3. Holmium is a very strong paramagnet above 133 K (−140 °C, or −220 °F). At that temperature the metal orders antiferromagnetically, forming a basal plane spiral structure. At 19 K (−254 °C, or −425 °F) the magnetic moments tilt along the c-axis lifting out of the basal plane by some 10°, forming a conical ferrimagnetic structure. Holmium was discovered spectroscopically (1878) by Swiss chemists Jacques-Louis Soret and Marc Delafontaine and independently (1879) by Swedish chemist Per Teodor Cleve, who separated it chemically from erbium and thulium. Cleve named the element for his native city of Stockholm, its Latinized name being Holmia. Holmium occurs associated with other rare earths in laterite clays and in the minerals xenotime, euxenite, and many others; it also occurs in the products of nuclear fission. The one naturally occurring isotope, holmium-165, is stable. There are numerous radioactive isotopes (a total of 35, not counting nuclear isomers), ranging from holmium-140 to holmium-175 and having half-lives from 4.1 milliseconds (holmium-141) to 4,570 years (holmium-163). Holmium is one of the least abundant rare earths; its abundance in Earth’s crust is comparable to that of thallium."
      },


      "er" :{
         elementName : "Erbium",
         elementSymbol : "(Er)",
         atomNoTop : "68",
         elementType : "Lanthanide",
         atnNo : "68",
         atnMass : "167.259 u",
         block : "f-Block",
         discover : "Carl Gustaf Mosander",
         link : "https://c8.alamy.com/comp/G16JGM/symbol-and-electron-diagram-for-erbium-illustration-G16JGM.jpg",
         desc : "Erbium (Er), chemical element, a rare-earth metal of the lanthanide series of the periodic table. Pure erbium is a silvery white metal that is relatively stable in air. It slowly reacts with water and quickly dissolves in diluted acids, except hydrofluoric acid (HF) because of formation of the protective fluoride (ErF3) layer on the surface of the metal. Erbium is a very strong paramagnet above approximately 85 K (−188 °C, or −307 °F). Between 85 K and 20 K (−253 °C, or −424 °F) the metal is antiferromagnetic, and below about 20 K it is arranged in a conical ferromagnetic structure. The element was discovered in 1842 as an oxide by Carl Gustaf Mosander, who originally called it terbia; in the confusion arising from the similarity in the properties of the rare-earth elements, the names of two, terbium and erbium, became interchanged (c. 1860). The element occurs in many rare-earth minerals; among the more important are the laterite ionic clays, xenotime, and euxenite. Erbium also occurs in the products of nuclear fission. In Earth’s crust, erbium is as abundant as tantalum and tungsten. Natural erbium is a mixture of six stable isotopes: erbium-166 (33.5 percent), erbium-168 (26.98 percent), erbium-167 (22.87 percent), erbium-170 (14.91 percent), erbium-164 (1.6 percent), and erbium-162 (0.14 percent). Not counting nuclear isomers, a total of 30 radioactive isotopes of erbium are known. Their mass varies from 142 to 177. All the radioactive isotopes of erbium are relatively unstable: their half-lives range from 1 second (erbium-145) to 9.4 days (erbium-169)."
      },


      "tm" :{
         elementName : "Thulium",
         elementSymbol : "(Tm)",
         atomNoTop : "69",
         elementType : "Lanthanide",
         atnNo : "69",
         atnMass : "168.93421 u",
         block : "f-Block",
         discover : "Per Teodor Cleve",
         link : "https://c8.alamy.com/comp/2GR5BEX/symbol-and-electron-diagram-for-thulium-2GR5BEX.jpg",
         desc : "Thulium (Tm), chemical element, a rare-earth metal of the lanthanide series of the periodic table. Thulium is a moderately hard, silvery white metal that is stable in air but can easily be dissolved in diluted acids—except hydrofluoric acid (HF), in which an insoluble trifluoride (TmF3) layer forms on the surface of the metal, impeding further chemical reaction. Thulium is a strong paramagnet above 56 K (−217 °C, or −359 °F). Between 56 and 32 K (−241 °C, or −402 °F) the metal is antiferromagnetic with a sinusoidally modulated magnetic structure along the c-axis of its crystal structure, and below 32 K thulium is ferrimagnetic. Thulium was discovered in 1879, along with holmium, by Per Teodor Cleve, who named the oxide thulia after an ancient name for Scandinavia. It is found in small amounts in such rare-earth minerals as laterite ionic clays, xenotime, and euxenite and in products of nuclear fission. Thulium is one of the rarest of the rare-earth elements. Its abundance in Earth’s crust is nearly the same as those of antimony and iodine. Natural thulium is wholly composed of the stable isotope thulium-169. Thirty-five radioactive isotopes (excluding nuclear isomers) are known. They range in mass from 144 to 179, and their half-lives range from more than 300 nanoseconds (thulium-178) to 1.92 years (thulium-171). Bombarded by neutrons, natural thulium becomes radioactive thulium-170 (128.6-day half-life), which ejects soft gamma radiation with wavelength commensurate with laboratory hard X-ray sources. Only one allotropic (structural) form is known for thulium."
      },


      "yb" :{
         elementName : "Ytterbium",
         elementSymbol : "(Yb)",
         atomNoTop : "70",
         elementType : "Lanthanide",
         atnNo : "70",
         atnMass : "173.04 u",
         block : "f-Block",
         discover : "Jean Charles Galissard de Marignac",
         link : "https://c8.alamy.com/comp/RN8NJT/3d-render-of-atom-structure-of-yttrium-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-as-RN8NJT.jpg",
         desc : "Ytterbium (Yb), chemical element, a rare-earth metal of the lanthanide series of the periodic table. Ytterbium is the most volatile rare-earth metal. It is a soft, malleable silvery metal that will tarnish slightly when stored in air and therefore should be stored in vacuum or in an inert atmosphere when long storage time is required. It slowly oxidizes in air, forming Yb2O3; the metal is readily dissolved in diluted acids—except hydrofluoric acid (HF), in which a protective layer of YbF3 forms on the surface and impedes further chemical reaction. Ytterbium is weakly paramagnetic, having the lowest magnetic susceptibility of all the rare-earth metals. The first concentrate of ytterbium was obtained in 1878 by Swiss chemist Jean-Charles Galissard de Marignac and named by him for the town of Ytterby, Sweden, where it (and the first discovered rare-earth element, yttrium) was found. French chemist Georges Urbain and Austrian chemist Carl Auer von Welsbach independently demonstrated in 1907–08 that Marignac’s earth was composed of two oxides, which Urbain called neoytterbia and lutetia. The elements are now known as ytterbium and lutetium. Ytterbium is among the less-abundant rare earths. It occurs in minute amounts in many rare-earth minerals such as laterite clays, xenotime, and euxenite and is found in products of nuclear fission as well. Ytterbium, like europium, is a divalent metal. A compound of ytterbium in the +2 oxidation state was first prepared in 1929 by W.K. Klemm and W. Schuth, who reduced ytterbium trichloride, YbCl3, to ytterbium dichloride, YbCl2, with hydrogen."
      },


      "lu" :{
         elementName : "Lutetium",
         elementSymbol : "(Lu)",
         atomNoTop : "71",
         elementType : "Lanthanide",
         atnNo : "71",
         atnMass : "174.967 u",
         block : "f-Block",
         discover : "Georges Urbain, Charles James",
         link : "https://c8.alamy.com/comp/2GR7C5W/symbol-and-electron-diagram-for-lutetium-2GR7C5W.jpg",
         desc : "Lutetium (Lu), chemical element, a rare-earth metal of the lanthanide series of the periodic table, that is the densest and the highest-melting rare-earth element and the last member of the lanthanide series. In its pure form, lutetium metal is silvery white and stable in air. The metal is easily dissolved in diluted acids—except hydrofluoric acid (HF), in which a protective layer of LuF3 forms on the surface and prevents the metal from further dissolution. The metal is paramagnetic from 0 K (−273 °C, or −460 °F) to its melting point at 1,936 K (1,663 °C, or 3,025 °F) with a temperature-independent magnetic susceptibility between approximately 4 and 300 K (−269 and 27 °C, or −452 and 80 °F). It becomes superconducting at 0.022 K (−273.128 °C, or −459.63 °F) and pressures exceeding 45 kilobars. Lutetium was discovered in 1907–08 by Austrian chemist Carl Auer von Welsbach and Georges Urbain, working independently. Urbain derived the name for the element from Lutetia, the ancient Roman name for Paris, to honour his native city. The name lutetium became widely accepted except in Germany, where it was commonly called cassiopeium until the 1950s. Natural lutetium consists of two isotopes: stable lutetium-175 (97.4 percent) and radioactive lutetium-176 (2.6 percent, 3.76 × 1010-year half-life). The radioactive isotope is used to determine the age of meteorites relative to that of Earth. In addition to lutetium-176, and not counting nuclear isomers, 33 more radioactive isotopes of lutetium are known."
      },


      "hf" :{
         elementName : "Hafnium",
         elementSymbol : "(Hf)",
         atomNoTop : "72",
         elementType : "Transition Metal",
         atnNo : "72",
         atnMass : "178.49 u",
         block : "d-Block",
         discover : "George de Hevesy, Dirk Coster",
         link : "https://c8.alamy.com/comp/2B7M2MY/3d-render-of-atom-structure-of-hafnium-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-as-2B7M2MY.jpg",
         desc : "Hafnium (Hf), chemical element (atomic number 72), metal of Group 4 (IVb) of the periodic table. It is a ductile metal with a brilliant silvery lustre. The Dutch physicist Dirk Coster and the Hungarian Swedish chemist George Charles von Hevesy discovered (1923) hafnium in Norwegian and Greenland zircons by analyzing their X-ray spectra. They named the new element for Copenhagen (in New Latin, Hafnia), the city in which it was discovered. Hafnium is dispersed in Earth’s crust to the extent of three parts per million and is invariably found in zirconium minerals up to a few percent compared with zirconium. For example, the minerals zircon, ZrSiO4 (zirconium orthosilicate), and baddeleyite, which is essentially pure zirconium dioxide, ZrO2, generally have a hafnium content that varies from a few tenths of 1 percent to several percent. Altered zircons, like some alvites and cyrtolites, products of residual crystallization, show greater percentages of hafnium (up to 17 percent hafnium oxide in cyrtolite from Rockport, Mass., U.S.). Commercial sources of hafnium-bearing zirconium minerals are found in beach sands and river gravel in the United States (principally Florida), Australia, Brazil, western Africa, and India. Hafnium vapour has been identified in the Sun’s atmosphere.  It forms alloys with iron, niobium, tantalum, titanium, and other transition metals. The alloy tantalum hafnium carbide (Ta4HfC5), with a melting point of 4,215 °C (7,619 °F), is one of the most refractory substances known."
      },


      "ta" :{
         elementName : "Tantalum",
         elementSymbol : "(Ta)",
         atomNoTop : "73",
         elementType : "Transition Metal",
         atnNo : "73",
         atnMass : "180.94788 u",
         block : "d-Block",
         discover : "Anders Gustaf Ekeberg",
         link : "https://c8.alamy.com/comp/2B7M2N0/3d-render-of-atom-structure-of-tantalum-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-as-2B7M2N0.jpg",
         desc : "Tantalum (Ta), chemical element, bright, very hard, silver-gray metal of Group 5 (Vb) of the periodic table, characterized by its high density, extremely high melting point, and excellent resistance to all acids except hydrofluoric at ordinary temperatures. Closely associated with niobium in ores and in properties, tantalum was discovered (1802) by the Swedish chemist Anders Gustaf Ekeberg and named after the mythological character Tantalus because of the tantalizing problem of dissolving the oxide in acids. Due to the great chemical similarity of niobium and tantalum, the establishment of the individual identities of the two elements was very difficult. Tantalum was soon identified with niobium (then called columbium), but in 1844 the German chemist Heinrich Rose demonstrated their distinct characters. Although some of the impure metal was isolated earlier, the Russian chemist Werner Bolton prepared (1903) the first ductile tantalum, which was used briefly as incandescent lamp-filament material. Relatively rare, tantalum is about as abundant as uranium. It occurs, with niobium, in the columbite–tantalite series (in which columbite [FeNb2O6] and tantalite [FeTa2O6] occur in highly variable ratios) and the pyrochlore–microlite series of minerals. Tantalum is separated from niobium compounds by solvent extraction in a liquid-liquid process and is then reduced to metallic tantalum powder. The massive metal is produced by powder metallurgy techniques."
      },

      "w" :{
         elementName : "Tungsten",
         elementSymbol : "(W)",
         atomNoTop : "74",
         elementType : "Transition Metal",
         atnNo : "74",
         atnMass : "183.84 u",
         block : "d-Block",
         discover : "Carl Wilhelm Scheele",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXNyeDN4MTExMWMxMHdmd3VxZDFkdWlkdmt3MnYycWRnZDA1Z3o4MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YnNf0IZRXO7eEi2pZG/giphy-downsized-large.gif",
         desc : "Tungsten (W), also called wolfram, chemical element, an exceptionally strong refractory metal of Group 6 (VIb) of the periodic table, used in steels to increase hardness and strength and in lamp filaments. Tungsten metal was first isolated (1783) by the Spanish chemists and mineralogists Juan José and Fausto Elhuyar by charcoal reduction of the oxide (WO3) derived from the mineral wolframite. Earlier (1781) the Swedish chemist Carl Wilhelm Scheele had discovered tungstic acid in a mineral now known as scheelite, and his countryman Torbern Bergman concluded that a new metal could be prepared from the acid. The names tungsten and wolfram have been used for the metal since its discovery, though everywhere Jön Jacob Berzelius’s symbol W prevails. In British and American usage, tungsten is preferred; in Germany and a number of other European countries, wolfram is accepted. The amount of tungsten in Earth’s crust is estimated to be 1.5 parts per million, or about 1.5 grams per ton of rock. China is the dominant producer of tungsten; in 2016 it produced over 80 percent of total tungsten mined, and it contained nearly two-thirds of the world’s reserves. Tungsten metal has a nickel-white to grayish lustre. Among metals it has the highest melting point, at 3,410 °C (6,170 °F), the highest tensile strength at temperatures of more than 1,650 °C (3,002 °F), and the lowest coefficient of linear thermal expansion (4.43 × 10−6 per °C at 20 °C [68 °F])."
      },

      "re" :{
         elementName : "Rhenium",
         elementSymbol : "(Re)",
         atomNoTop : "75",
         elementType : "Transition Metal",
         atnNo : "75",
         atnMass : "186.207 u",
         block : "d-Block",
         discover : "Walter Noddack, Ida Noddack, Otto Berg",
         link : "https://c8.alamy.com/comp/2B7M2N3/3d-render-of-atom-structure-of-rhenium-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-as-2B7M2N3.jpg",
         desc : "Rhenium (Re), chemical element, a very rare metal of Group 7 (VIIb) of the periodic table and one of the densest elements. Predicted by the Russian chemist Dmitry Ivanovich Mendeleyev (1869) as chemically related to manganese, rhenium was discovered (1925) by the German chemists Ida and Walter Noddack and Otto Carl Berg. The metal and its alloys have found limited application as turbine blades in fighter-jet engines, fountain pen points, high-temperature thermocouples (with platinum), catalysts, electrical contact points, and instrument-bearing points and in electrical components, such as in flashbulb filaments as an alloy with tungsten. Rhenium does not occur free in nature or as a compound in any distinct mineral; instead it is widely distributed in small amounts in other minerals, usually in concentrations averaging about 0.001 parts per million. Chile is the world leader in rhenium recovery, followed by the United States, Poland, Uzbekistan, and Kazakhstan. Rhenium metal is silvery white and extremely hard; it resists wear and corrosion very well and has one of the highest melting points of the elements. (The melting point of rhenium, 3,180 °C [5,756 °F], is exceeded only by those of tungsten and carbon.) The metal powder slowly oxidizes in air above 150 °C (300 °F) and rapidly at higher temperatures to form the yellow heptoxide, Re2O7. The metal is not soluble in hydrochloric acid and dissolves only slowly in other acids."
      },


      "os" :{
         elementName : "Osmium",
         elementSymbol : "(Os)",
         atomNoTop : "76",
         elementType : "Transition Metal",
         atnNo : "76",
         atnMass : "190.23 u",
         block : "d-Block",
         discover : "Smithson Tennant",
         link : "https://c8.alamy.com/comp/2B7M2N4/3d-render-of-atom-structure-of-osmium-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-as-b-2B7M2N4.jpg",
         desc : "Osmium (Os), chemical element, one of the platinum metals of Groups 8–10 (VIIIb), Periods 5 and 6, of the periodic table and the densest naturally occurring element. A gray-white metal, osmium is very hard, brittle, and difficult to work, even at high temperatures. Of the platinum metals, it has the highest melting point, so fusing and casting are difficult. Osmium wires were used for filaments of early incandescent lamps before the introduction of tungsten. It has been used chiefly as a hardener in alloys of the platinum metals, though ruthenium has generally replaced it. A hard alloy of osmium and iridium was used for tips of fountain pens and phonograph needles, and osmium tetroxide is used in certain organic syntheses. Pure osmium metal does not occur in nature. Osmium has a low crustal abundance of about 0.001 part per million. Though rare, osmium is found in native alloys with other platinum metals: in siserskite (up to 80 percent), in iridosmine, in aurosmiridium (25 percent), and in slight amounts in native platinum. The English chemist Smithson Tennant discovered the element together with iridium in the residues of platinum ores not soluble in aqua regia. He announced its isolation (1804) and named it for the unpleasant odour of some of its compounds (Greek osme, odour). Natural osmium consists of a mixture of seven stable isotopes: osmium-184 (0.02 percent), osmium-186 (1.59 percent), osmium-187 (1.96 percent), osmium-188 (13.24 percent), osmium-189 (16.15 percent), osmium-190 (26.26 percent), and osmium-192 (40.78 percent)."
      },


      "ir" :{
         elementName : "Iridium",
         elementSymbol : "(Ir)",
         atomNoTop : "77",
         elementType : "Transition Metal",
         atnNo : "77",
         atnMass : "192.217 u",
         block : "d-Block",
         discover : "Smithson Tennant",
         link : "https://c8.alamy.com/comp/2B7M2N5/3d-render-of-atom-structure-of-iridium-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-as-2B7M2N5.jpg",
         desc : "Iridium (Ir), chemical element, one of the platinum metals of Groups 8–10 (VIIIb), Periods 5 and 6, of the periodic table. It is very dense and rare and is used in platinum alloys. A precious, silver-white metal, iridium is hard and brittle, but it becomes ductile and can be worked at a white heat, from 1,200° to 1,500° C (2,200° to 2,700° F). It is one of the densest terrestrial substances. In the massive state the metal is practically insoluble in acids and is not attacked even by aqua regia. It can be dissolved in concentrated hydrochloric acid in the presence of sodium perchlorate at 125° to 150° C (257° to 302° F). Because of difficulties in preparation and fabrication, the pure metal has few applications. Iridium is chiefly used in the form of platinum alloys. Platinum-iridium alloys (5 to 10 percent iridium) are readily workable metals that are much harder and stiffer and more resistant to chemical attack than the soft pure platinum. Such alloys are used for jewelry, pen points, surgical pins and pivots, and electrical contacts and sparking points. The international prototype standard kilogram of mass is made from an alloy containing 90 percent platinum and 10 percent iridium. Pure iridium probably does not occur in nature; its abundance in the Earth’s crust is very low, about 0.001 parts per million. Though rare, iridium does occur in natural alloys with other noble metals: in iridosmine up to 77 percent iridium, in platiniridium up to 77 percent, in aurosmiridium 52 percent, and in native platinum up to 7.5 percent."
      },


      "pt" :{
         elementName : "Platinum",
         elementSymbol : "(Pt)",
         atomNoTop : "78",
         elementType : "Transition Metal",
         atnNo : "78",
         atnMass : "195.084 u",
         block : "d-Block",
         discover : "Antonio de Ulloa",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzhoZnBkMXkzZm94cDE4dmE2Z2k4cW5qb24yb2psNHU1YnBrYXNmciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SVO4P6rsf88QACW86o/giphy-downsized-large.gif",
         desc : "Platinum (Pt), chemical element, the best known and most widely used of the six platinum metals of Groups 8–10, Periods 5 and 6, of the periodic table. A very heavy, precious, silver-white metal, platinum is soft and ductile and has a high melting point and good resistance to corrosion and chemical attack. For example, its surface remains bright after being brought to white heat in air, and, though it readily dissolves in aqua regia, it is scarcely attacked by simple acids. (It does dissolve slowly in hydrochloric acid in the presence of air.) Small amounts of iridium are commonly added to give a harder, stronger alloy that retains the advantages of pure platinum.The Italian-French physician Julius Caesar Scaliger alluded (1557) to a refractory metal, probably platinum, found between Darién and Mexico. The first certain discovery was in the alluvial deposits of the Río Pinto, Colombia. The Spaniards called the new metal platina del Pinto for its resemblance to silver. The world’s most important deposits occur in the Transvaal of South Africa. Other deposits are found in Russia, Finland, Ireland, Borneo, New South Wales, New Zealand, Brazil, Peru, and Madagascar. In North America native platinum is found in Alaska, California, and Oregon, in British Columbia, and in Alberta. Natural platinum is a mixture of six isotopes: platinum-190 (0.012 percent), platinum-192 (0.782 percent), platinum-194 (32.86 percent), platinum-195 (33.78 percent), platinum-196 (25.21 percent), and platinum-198 (7.36 percent)"
      },


      "au" :{
         elementName : "Gold",
         elementSymbol : "(Au)",
         atomNoTop : "79",
         elementType : "Transition Metal",
         atnNo : "79",
         atnMass : "196.966569 u",
         block : "d-Block",
         discover : "ancient Egyptians",
         link : "https://c8.alamy.com/comp/2B7M2N7/3d-render-of-atom-structure-of-gold-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-as-blu-2B7M2N7.jpg",
         desc : "Gold (Au), chemical element, a dense lustrous yellow precious metal of Group 11 (Ib), Period 6, of the periodic table of the elements. Gold has several qualities that have made it exceptionally valuable throughout history. It is attractive in colour and brightness, durable to the point of virtual indestructibility, highly malleable, and usually found in nature in a comparatively pure form. The history of gold is unequaled by that of any other metal because of its perceived value from earliest times. Gold is one of the densest of all metals. It is a good conductor of heat and electricity. It is also soft and the most malleable and ductile of the elements; an ounce (31.1 grams; gold is weighed in troy ounces) can be beaten out to 187 square feet (about 17 square metres) in extremely thin sheets called gold leaf. Although gold’s official role in the international monetary system had come to an end by the 1970s, the metal remains a highly regarded reserve asset, and approximately 45 percent of all the world’s gold is held by governments and central banks for this purpose. Gold is still accepted by all nations as a medium of international payment. Two types of deposits containing significant amounts of gold are known: hydrothermal veins, where it is associated with quartz and pyrite (fool’s gold); and placer deposits, both consolidated and unconsolidated, that are derived from the weathering of gold-bearing rocks.  Crystals about 2.5 cm (1 inch) or more across have been found in California. Masses, some on the order of 90 kg (200 pounds), have been reported from Australia."
      },

      "hg" :{
         elementName : "Mercury",
         elementSymbol : "(Hg)",
         atomNoTop : "80",
         elementType : "Transition Metal",
         atnNo : "80",
         atnMass : "200.59 u",
         block : "d-Block",
         discover : "Galileo Galilei and Thomas Harriot",
         link : "https://c8.alamy.com/comp/G1NPNH/diagram-representation-of-the-element-mercury-illustration-G1NPNH.jpg",
         desc : "Mercury (Hg), also called quicksilver, chemical element, liquid metal of Group 12 (IIb, or zinc group) of the periodic table. Mercury was known in Egypt and also probably in the East as early as 1500 BCE. The name mercury originated in 6th-century alchemy, in which the symbol of the planet was used to represent the metal; the chemical symbol Hg derives from the Latin hydrargyrum, “liquid silver.” Although its toxicity was recognized at an early date, its main application was for medical purposes. Mercury is the only elemental metal that is liquid at room temperature. (Cesium melts at about 28.5 °C [83 °F], gallium at about 30 °C [86 °F], and rubidium at about 39 °C [102 °F].) Mercury is silvery white, slowly tarnishes in moist air, and freezes into a soft solid like tin or lead at −38.83 °C (−37.89 °F). It boils at 356.62 °C (673.91 °F). It alloys with copper, tin, and zinc to form amalgams, or liquid alloys. An amalgam with silver is used as a filling in dentistry. Mercury does not wet glass or cling to it, and this property, coupled with its rapid and uniform volume expansion throughout its liquid range, made it useful in thermometers. (Mercury thermometers were supplanted by more accurate electronic digital thermometers in the early 21st century). Gold and silver dissolve readily in mercury, and in the past this property was used in the extraction of these metals from their ores.Natural mercury is a mixture of seven stable isotopes: 196Hg (0.15 percent), 198Hg (9.97 percent), 199Hg (16.87 percent), 200Hg (23.10 percent), 201Hg (13.18 percent), 202Hg (29.86 percent), and 204Hg (6.87 percent)."
      },

      "tl" :{
         elementName : "Thallium",
         elementSymbol : "(Ti)",
         atomNoTop : "81",
         elementType : "Post-transition Metal",
         atnNo : "81",
         atnMass : "204.3833 u",
         block : "p-Block",
         discover : "Sir William Crookes",
         link : "https://c8.alamy.com/comp/G16HXB/symbol-and-electron-diagram-for-thallium-illustration-G16HXB.jpg",
         desc : "Thallium (Tl), chemical element, metal of main Group 13 (IIIa, or boron group) of the periodic table, poisonous and of limited commercial value. Like lead, thallium is a soft, low-melting element of low tensile strength. Freshly cut thallium has a metallic lustre that dulls to bluish gray upon exposure to air. The metal continues to oxidize upon prolonged contact with air, generating a heavy nonprotective oxide crust. Thallium dissolves slowly in hydrochloric acid and dilute sulfuric acid and rapidly in nitric acid. Rarer than tin, thallium is concentrated in only a few minerals that have no commercial value. Trace amounts of thallium are present in sulfide ores of zinc and lead; in the roasting of these ores, the thallium becomes concentrated in the flue dusts, from which it is recovered. Two crystalline forms of the element are known: close-packed hexagonal below about 230 °C (450 °F) and body-centred cubic above. Natural thallium, the heaviest of the boron group elements, consists almost entirely of a mixture of two stable isotopes: thallium-203 (29.5 percent) and thallium-205 (70.5 percent). Traces of several short-lived isotopes occur as decay products in the three natural radioactive disintegration series: thallium-206 and thallium-210 (uranium series), thallium-208 (thorium series), and thallium-207 (actinium series). Thallium imparts a brilliant green coloration to a bunsen flame. Thallous chromate, formula Tl2CrO4, is best used in the quantitative analysis of thallium, after any thallic ion, Tl3+, present in the sample has been reduced to the thallous state, Tl+."
      },

      "pb" :{
         elementName : "Lead",
         elementSymbol : "(Pb)",
         atomNoTop : "82",
         elementType : "Post-transition Metal",
         atnNo : "82",
         atnMass : "207.2 u",
         block : "p-Block",
         discover : "No Records",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnpyNXRjcDYwNXZlcHRiNGY2d2dkejlmYjVtZ2I1dGsxbXpueDU0MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SwBpCOZYXVz6jOe8je/giphy-downsized-large.gif",
         desc : "Lead (Pb), a soft, silvery white or grayish metal in Group 14 (IVa) of the periodic table. Lead is very malleable, ductile, and dense and is a poor conductor of electricity. Known in antiquity and believed by the alchemists to be the oldest of metals, lead is highly durable and resistant to corrosion, as is indicated by the continuing use of lead water pipes installed by the ancient Romans. The symbol Pb for lead is an abbreviation of the Latin word for lead, plumbum. Lead is mentioned often in early biblical accounts. The Babylonians used the metal as plates on which to record inscriptions. The Romans used it for tablets, water pipes, coins, and even cooking utensils; indeed, as a result of the last use, lead poisoning was recognized in the time of Augustus Caesar. The compound known as white lead was apparently prepared as a decorative pigment at least as early as 200 BCE. Modern developments date to the exploitation in the late 1700s of deposits in the Missouri-Kansas-Oklahoma area in the United States. On a weight basis, lead has nearly the same abundance in Earth’s crust as tin. Cosmically, there is 0.47 lead atom per 106 silicon atoms. The cosmic abundance is comparable to those of cesium, praseodymium, hafnium, and tungsten, each of which is regarded as a reasonably scarce element. Only a single crystalline modification, with a close-packed metallic lattice, is known. Properties that are responsible for the many uses of elemental lead include its ductility, ease of welding, low melting point, high density, and ability to absorb gamma radiation and X-radiation. "
      },

      "bi" :{
         elementName : "Bismuth",
         elementSymbol : "(Bi)",
         atomNoTop : "83",
         elementType : "Post-transition Metal",
         atnNo : "83",
         atnMass : "208.9804 u",
         block : "p-Block",
         discover : "Claude François Geoffroy",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3FkbzN1Nzh2b3BxdGlidGVjNHEyYzd3YXR1eDE4azFlOGR2eTdhYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gFsfVMDEDiHGcBp7BO/giphy-downsized-large.gif",
         desc : "Bismuth (Bi), the most metallic and the least abundant of the elements in the nitrogen group (Group 15 [Va] of the periodic table). Bismuth is hard, brittle, lustrous, and coarsely crystalline. It can be distinguished from all other metals by its colour—gray-white with a reddish tinge. Bismuth evidently was known in very early times, since it occurs in the native state as well as in compounds. For a long period, however, it was not clearly recognized as a separate metal, having been confused with such metals as lead, antimony, and tin. Miners during the Middle Ages apparently believed bismuth to be a stage in the development of silver from baser metals and were dismayed when they uncovered a vein of the metal thinking they had interrupted the process. In the 15th-century writings of the German monk Basil Valentine this element is referred to as Wismut, a term that may have been derived from a German phrase meaning “white mass.” In any case it was Latinized to bisemutum by the mineralogist Georgius Agricola, who recognized its distinctive qualities and described how to obtain it from its ores. Bismuth was accepted as a specific metal by the middle of the 18th century, and works on its chemistry were published in 1739 by the German chemist Johann Heinrich Pott and in 1753 by the Frenchman Claude-François Geoffroy. Bismuth is a rather brittle metal with a somewhat pinkish, silvery metallic lustre. Bismuth is the most diamagnetic of all metals (i.e., it exhibits the greatest opposition to being magnetized). It undergoes a 3.3 percent expansion when it solidifies from the molten state."
      },


      "po" :{
         elementName : "Polonium",
         elementSymbol : "(Po)",
         atomNoTop : "84",
         elementType : "Post-transition Metal",
         atnNo : "84",
         atnMass : "209 u",
         block : "p-Block",
         discover : "Marie Curie, Pierre Curie",
         link : "https://c8.alamy.com/comp/G16GNN/diagram-representation-of-the-element-polonium-illustration-G16GNN.jpg",
         desc : "Polonium (Po), a radioactive, silvery-gray or black metallic element of the oxygen group (Group 16 [VIa] in the periodic table). The first element to be discovered by radiochemical analysis, polonium was discovered in 1898 by Pierre and Marie Curie, who were investigating the radioactivity of a certain pitchblende, a uranium ore. The very intense radioactivity not attributable to uranium was ascribed to a new element, named by them after Marie Curie’s homeland, Poland. The discovery was announced in July 1898. Polonium is extremely rare, even in pitchblende: 1,000 tons of the ore must be processed to obtain 40 milligrams of polonium. Its abundance in the Earth’s crust is about one part in 1015. It occurs in nature as a radioactive decay product of uranium, thorium, and actinium. The half-lives of its isotopes range from a fraction of a second up to 103 years; the most common natural isotope of polonium, polonium-210, has a half-life of 138.4 days. Polonium usually is isolated from by-products of the extraction of radium from uranium minerals. In the chemical isolation, pitchblende ore is treated with hydrochloric acid, and the resulting solution is heated with hydrogen sulfide to precipitate polonium monosulfide, PoS, along with other metal sulfides, such as that of bismuth, Bi2S3, which resembles polonium monosulfide closely in chemical behaviour, though it is less soluble. Chemically, polonium resembles the elements tellurium and bismuth."
      },


      "at" :{
         elementName : "Astatine",
         elementSymbol : "(At)",
         atomNoTop : "85",
         elementType : "Post-transition Metal",
         atnNo : "85",
         atnMass : "301.85 u",
         block : "p-Block",
         discover : "Emilio Segrè",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzY4YXFpYzZodW1qeHVjYmZpNWdicHloZGNhZ2lvbWMybDl6d3VhMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VEsyJ5aXRh2KEXhICr/giphy-downsized-large.gif",
         desc : "Astatine (At), radioactive chemical element and the heaviest member of the halogen elements, or Group 17 (VIIa) of the periodic table. Astatine, which has no stable isotopes, was first synthetically produced (1940) at the University of California by American physicists Dale R. Corson, Kenneth R. MacKenzie, and Emilio Segrè, who bombarded bismuth with accelerated alpha particles (helium nuclei) to yield astatine-211 and neutrons. Naturally occurring astatine isotopes have subsequently been found in minute amounts in the three natural radioactive decay series, in which they occur by minor branching (astatine-218 in the uranium series, astatine-216 in the thorium series, and astatine-215 and astatine-219 in the actinium series). Thirty-two isotopes are known; astatine-210, with a half-life of 8.1 hours, is the longest lived. Because astatine has no stable or long-lived isotopes, it was given its name from the Greek word astatos, meaning “unstable.” Which indicates that bismuth-209 takes up one alpha particle and emits x neutrons to form an isotope of astatine, whose atomic weight depends on the number of neutrons lost. Metallic bismuth may be used as a target material. From this, astatine may readily be removed by distillation in air from a stainless-steel tube. The free element begins to distill at 271 °C (520 °F, or the melting point of bismuth), but the operation is best carried out at 800 °C (1,500 °F) with subsequent redistillation."
      },

      "rn" :{
         elementName : "Radon",
         elementSymbol : "(Rn)",
         atomNoTop : "86",
         elementType : "Nobel Gas",
         atnNo : "86",
         atnMass : "222 u",
         block : "p-Block",
         discover : "Friedrich Ernst Dorn", 
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTNtZDVtNjRrOGFmbHgzNnp3aGRsNGtyY2NnYXYwc3RoaDZ4aGk2eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XGDzpt2vFeciNAqO8B/giphy-downsized-large.gif",
         desc : "Radon (Rn), chemical element, a heavy radioactive gas of Group 18 (noble gases) of the periodic table, generated by the radioactive decay of radium. (Radon was originally called radium emanation.) Radon is a colourless gas, 7.5 times heavier than air and more than 100 times heavier than hydrogen. The gas liquefies at −61.8 °C (−79.2 °F) and freezes at −71 °C (−96 °F). On further cooling, solid radon glows with a soft yellow light that becomes orange-red at the temperature of liquid air (−195 °C [−319 °F]). Radon is rare in nature because its isotopes are all short-lived. The atmosphere contains traces of radon near the ground as a result of seepage from soil and rocks, both of which contain minute quantities of radium. (Radium occurs as a natural decay product of uranium present in various types of rocks). Radioactive decay of uranium in minerals, especially granite, generates radon gas that can diffuse through soil and rock and enter buildings through basements (radon has a higher density than air) and through water supplies derived from wells (radon has a significant solubility in water). The gas can accumulate in the air of poorly ventilated houses. When a mixture of trace amounts of radon-222 and fluorine gas is heated to approximately 400 °C (752 °F), a nonvolatile radon fluoride is formed. The intense α-radiation of millicurie and curie amounts of radon provides sufficient energy to allow radon in such quantities to react spontaneously with gaseous fluorine at room temperature and with liquid fluorine at −196 °C (−321 °F)."
      },


      "fr" :{
         elementName : "Francium",
         elementSymbol : "(Fr)",
         atomNoTop : "87",
         elementType : "Alkali Metal",
         atnNo : "87",
         atnMass : "223 u",
         block : "s-Block",
         discover : "Marguerite Perey",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXE5c3pjYTNjZ3d0MnAwdDRsbmVrMWl2ZTRqaGt0NTNhcG1kb2diaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3ISoedvSdHw6lBi01/giphy-downsized-large.gif",
         desc : "Francium (Fr), heaviest chemical element of Group 1 (Ia) in the periodic table, the alkali metal group. It exists only in short-lived radioactive forms. Natural francium cannot be isolated in visible, weighable amounts, for only 24.5 grams (0.86 ounce) occur at any time in the entire crust of Earth. The existence of francium was predicted by Russian chemist Dmitry I. Mendeleyev in his periodic classification of the elements. French chemist Marguerite Perey discovered francium (1939) while studying actinium-227, which decays by negative beta decay (electron emission) to an isotope of thorium (thorium-227) and by alpha emission (about 1 percent) into an isotope of francium (francium-223) that was formerly called actinium K (AcK) and is a member of the actinium decay series. Though it is the longest-lived isotope of francium, francium-223 has a half-life of only 22 minutes. Thirty-four isotopes of francium with masses between 199 and 232 have been artificially prepared, and, because natural francium cannot be concentrated, it is also prepared by neutron irradiation of radium to produce actinium, which decays to produce traces of francium. The chemistry of francium can be studied only by methods designed for trace quantities. In all respects, its observed behaviour, including the oxidation state of +1, is that to be expected of an alkali element filling a place just below cesium in the periodic table of the elements. There is almost no information on its biological aspects. "
      },

      "ra" :{
         elementName : "Radium",
         elementSymbol : "(Ra)",
         atomNoTop : "88",
         elementType : "Alkali Earth Metal",
         atnNo : "88",
         atnMass : "226 u",
         block : "s-Block",
         discover : "Marie Curie, Pierre Curie",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2NvbWR5cHQ3NjA3eG8xazE1amVwanozc2ZoazJoZDh5Y2pnMjYydiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/humNLTdJt5Ha0e104L/giphy-downsized-large.gif",
         desc : "Radium (Ra), radioactive chemical element, the heaviest of the alkaline-earth metals of Group 2 (IIa) of the periodic table. Radium is a silvery white metal that does not occur free in nature. Radium was discovered (1898) by Pierre Curie, Marie Curie, and an assistant, G. Bémont, after Marie Curie observed that the radioactivity of pitchblende was four or five times greater than that of the uranium it contained and was not fully explained on the basis of radioactive polonium, which she had just discovered in pitchblende residues. The new, powerfully radioactive substance could be concentrated with barium, but, because its chloride was slightly more insoluble, it could be precipitated by fractional crystallization. The separation was followed by the increase in intensity of new lines in the ultraviolet spectrum and by a steady increase in the apparent atomic weight of the material until a value of 225.2 was obtained, remarkably close to the currently accepted value of 226.03. By 1902, 0.1 gram of pure radium chloride was prepared by refining several tons of pitchblende residues, and by 1910 Marie Curie and André-Louis Debierne had isolated the metal itself. The long-lived radium-226 is found in nature as a result of its continuous formation from uranium-238 decay. In modern technology, radium is separated from barium by fractional crystallization of the bromides, followed by purification through ion-exchange techniques for removal of the last 10 percent of the barium."
      },

      "ac" :{
         elementName : "Actinium",
         elementSymbol : "(Ac)",
         atomNoTop : "89",
         elementType : "Actinide",
         atnNo : "89",
         atnMass : "227 u",
         block : "f-Block",
         discover : "André-Louis Debierne",
         link : "https://c8.alamy.com/comp/G16FXE/diagram-representation-of-the-element-actinium-illustration-G16FXE.jpg",
         desc : "Actinium (Ac), radioactive chemical element, in Group 3 (IIIb) of the periodic table, atomic number 89. Actinium was discovered (1899) by French chemist André-Louis Debierne in pitchblende residues left after French physicists Pierre and Marie Curie had extracted radium from them, and it was also discovered (1902) independently by German chemist Friedrich Oskar Giesel. Debierne named the element after the Greek word aktinos (“ray”). A ton of pitchblende ore contains about 0.15 mg of actinium. The rare silvery-white metal is highly radioactive, glowing blue in the dark. The most common isotope of actinium is actinium-227; the others, natural and artificial, are too short-lived to accumulate in macroscopic quantity. Actinium-227, which is one of the decay products of uranium-235, has a 21.8-year half-life and in turn decays almost entirely to thorium-227, but about 1 percent decays to francium-223. This whole disintegration chain with its branches is called the actinium series. Actinium-225 has a 10-day half-life, decaying by the emission of alpha particles. Its short-lived daughter isotopes emit only alpha and beta particles with no high-energy gamma rays. This isotope can thus deliver high-energy radiation to a tumour without greatly affecting the surrounding tissue. Complexes of actinium-225 have been studied for their use in nuclear medicine. Actinium, the ions of which in solution are colourless, exhibits an oxidation state of +3, closely resembling the rare-earth lanthanoid elements in its chemical properties. "
      },


      "th" :{
         elementName : "Thorium",
         elementSymbol : "(Th)",
         atomNoTop : "90",
         elementType : "Actinide",
         atnNo : "90",
         atnMass : "232.03806 u",
         block : "f-Block",
         discover : "Jöns Jacob Berzelius",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWQ4YnpzdjBvc2V4ZWVudjJiYTE2N2h0OXo4OTRwdXAzNHppN3c0biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JRg8ZQF2aBmfoc8NxG/giphy-downsized-large.gif",
         desc : "Thorium (Th), radioactive chemical element of the actinoid series of the periodic table, atomic number 90; it is a useful nuclear reactor fuel. Thorium was discovered (1828) by Swedish chemist Jöns Jacob Berzelius. It is silvery white but turns gray or black on exposure to air. It is about half as abundant as lead and is three times more abundant than uranium in Earth’s crust. Thorium is commercially recovered from the mineral monazite and occurs also in other minerals such as thorite and thorianite. Thorium metal has been produced in commercial quantities by reduction of the tetrafluoride (ThF4) and dioxide (ThO2) and by electrolysis of the tetrachloride (ThCl4). The element was named for the Norse god Thor. The metal may be extruded, rolled, forged, swaged, and spun, but drawing is difficult because of thorium’s low tensile strength. This and other physical properties such as melting and boiling points are greatly affected by small amounts of certain impurities, such as carbon and thorium dioxide. Thorium is added to magnesium and magnesium alloys to improve their high-temperature strength. It has been used in commercial photoelectric cells for measuring ultraviolet light of wavelengths ranging from 2000 to 3750 angstroms. Added to glass, thorium yields glasses with a high refractive index, useful for specialized optical applications. It was formerly in great demand as a component of mantles for gas and kerosene lamps and has been used in the manufacture of tungsten filaments for lightbulbs and vacuum tubes. "
      },


      "pa" :{
         elementName : "Protactinium",
         elementSymbol : "(Pa)",
         atomNoTop : "91",
         elementType : "Actinide",
         atnNo : "91",
         atnMass : "231.03588 u",
         block : "f-Block",
         discover : "Kazimierz Fajans, Oswald Helmuth Gohring",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnltaDlxcWdocml1b2tqc3J0Z2MwbW1sZGM3dmdyb3E5djFqZGI1YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/St9xgX9pLcGyI6z0Wv/giphy-downsized-large.gif",
         desc : "Protactinium (Pa), radioactive chemical element of the actinoid series of the periodic table, rarer than radium; its atomic number is 91. It occurs in all uranium ores to the extent of 0.34 part per million of uranium. Its existence was predicted by Russian chemist Dmitry Mendeleyev in his 1871 periodic table. Protactinium metal was first prepared (1934) by American chemist Aristid V. Grosse. The first isotope, protactinium-234, was discovered (1913) by American chemists Kasimir Fajans and O.H. Göhring. They named it brevium, afterward uranium X2, because it was a short-lived member of the uranium radioactive decay series. The long-lived isotope protactinium-231 (originally called protoactinium for “before actinium” and later shortened to protactinium) was discovered (1917) independently by German chemist Otto Hahn and Austrian physicist Lise Meitner in pitchblende, by Fajans, and by British chemists Frederick Soddy, John Cranston, and Sir Alexander Fleck. This isotope decays to actinium-227 with a half-life of 32,760 years. All 29 isotopes are radioactive; synthetic protactinium-233 is produced by neutron irradiation of thorium-232 after it is converted to thorium-233 and is the progenitor of the fissile uranium isotope uranium-233 in the production of nuclear fuel from thorium. Protactinium in most of its compounds exhibits an oxidation state of +5 (thus resembling tantalum) but also can be obtained in the +4 state. Its compounds readily hydrolyze in water, forming colloids, but dissolve by forming complex ions (as with the fluoride ion in hydrofluoric acid)."
      },

      "u" :{
         elementName : "Uranium",
         elementSymbol : "(U)",
         atomNoTop : "92",
         elementType : "Actinide",
         atnNo : "92",
         atnMass : "238.02891 u",
         block : "f-Block",
         discover : "Martin Heinrich Klaproth",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzc2eHRkaGNkN2Nianljd2pyYW9jNTFhNmFlMWdpaThoem5qMDViNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/J3y2WnZau1hfH3xyeV/giphy-downsized-large.gif",
         desc : "Uranium (U), radioactive chemical element of the actinoid series of the periodic table, atomic number 92. It is an important nuclear fuel. Uranium constitutes about two parts per million of Earth’s crust. Some important uranium minerals are pitchblende (impure U3O8), uraninite (UO2), carnotite (a potassium uranium vanadate), autunite (a calcium uranium phosphate), and torbernite (a copper uranium phosphate). These and other recoverable uranium ores, as sources of nuclear fuels, contain many times more energy than all the known recoverable deposits of fossil fuels. One pound of uranium yields as much energy as 1.4 million kilograms (3 million pounds) of coal. For additional information about uranium ore deposits, as well as coverage of mining, refining, and recovery techniques, see uranium processing. For comparative statistical data on uranium production, see table. Uranium is a dense, hard metallic element that is silvery white in colour. It is ductile, malleable, and capable of taking a high polish. In air the metal tarnishes and when finely divided breaks into flames. It is a relatively poor conductor of electricity. Though discovered (1789) by German chemist Martin Heinrich Klaproth, who named it after the then recently discovered planet Uranus, the metal itself was first isolated (1841) by French chemist Eugène-Melchior Péligot by the reduction of uranium tetrachloride (UCl4) with potassium. Organometallic compounds are an interesting and important group of compounds in which there are metal-carbon bonds linking a metal to organic groups."
      },


      "np" :{
         elementName : "Neptunium",
         elementSymbol : "(Np)",
         atomNoTop : "93",
         elementType : "Actinide",
         atnNo : "93",
         atnMass : "237.0482 u",
         block : "f-Block",
         discover : "Edwin McMillan, Philip Abelson",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM204aDBqeXp6dTNpZXMyZjV5Y3JodHQ4aGRrcXkybXhna256a2V5YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hqZxCqLQpqgsHEgQWA/giphy-downsized-large.gif",
         desc : "Neptunium (Np), radioactive chemical element of the actinoid series of the periodic table that was the first transuranium element to be artificially produced, atomic number 93. Though traces of neptunium have subsequently been found in nature, where it is not primeval but produced by neutron-induced transmutation reactions in uranium ores, American physicist Edwin M. McMillan and chemist Philip H. Abelson first found neptunium in 1940 after uranium had been bombarded by neutrons from the cyclotron at Berkeley, California. The element was named after the planet Neptune, which is the first planet beyond Uranus. Neptunium has been produced in weighable amounts in nuclear reactors. In breeder reactors it is a by-product of plutonium production from uranium-238 (about one part neptunium is produced for every 1,000 parts plutonium). All neptunium isotopes are radioactive; the stablest is neptunium-237, with a half-life of 2,144,000 years, and among the most unstable is neptunium-225, with a half-life of more than 2 microseconds. Neptunium-237 can be separated from used reactor fuel to study the physical and chemical properties of the element. Neptunium, a silvery metal, exists in three crystalline modifications. Neptunium is chemically reactive and is more similar to plutonium than to uranium, with oxidation states from +3 to +7. Neptunium ions in aqueous solution possess characteristic colours: Np3+, pale purple; Np4+, pale yellow-green; NpO2+, green-blue; NpO22+, varying from colourless to pink or yellow-green, depending on the anion present; and Np7+, dark green. "
      },


      "pu" :{
         elementName : "Plutonium",
         elementSymbol : "(Pu)",
         atomNoTop : "94",
         elementType : "Actinide",
         atnNo : "94",
         atnMass : "244 u",
         block : "f-Block",
         discover : "Glenn T. Seaborg, Edwin McMillan, Arthur Wahl",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDY3NTVqZzViNHRzY3g1c3ltdXFnOGgxaGo1bHUzM2FiYXZmb2todSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hpG4gBUbCk5r058aKb/giphy-downsized-large.gif",
         desc : "Plutonium (Pu), radioactive chemical element of the actinoid series of the periodic table, atomic number 94. It is the most important transuranium element because of its use as fuel in certain types of nuclear reactors and as an ingredient in nuclear weapons. Plutonium is a silvery metal that takes on a yellow tarnish in air. The element was first detected (1941) as the isotope plutonium-238 by American chemists Glenn T. Seaborg, Joseph W. Kennedy, and Arthur C. Wahl, who produced it by deuteron bombardment of uranium-238 in the 152-cm (60-inch) cyclotron at Berkeley, California. The element was named after the then planet Pluto. Traces of plutonium have subsequently been found in uranium ores, where it is not primeval but naturally produced by neutron irradiation. All plutonium isotopes are radioactive. The most important is plutonium-239 because it is fissionable, has a relatively long half-life (24,110 years), and can be readily produced in large quantities in breeder reactors by neutron irradiation of plentiful but nonfissile uranium-238. Critical mass (the amount that will spontaneously explode when brought together) must be considered when handling quantities in excess of 300 grams (2/3 lb). The critical mass of plutonium-239 is only about one-third that of uranium-235. Plutonium-238 is an alpha-emitting isotope that emits a negligible amount of gamma rays; it can be manufactured to harness its heat of radioactive decay to operate thermoelectric and thermionic devices that are small, lightweight, and long-lived (the half-life of plutonium-238 is 87.7 years)."
      },


      "am" :{
         elementName : "Americium",
         elementSymbol : "(Am)",
         atomNoTop : "95",
         elementType : "Actinide",
         atnNo : "95",
         atnMass : "243 u",
         block : "f-Block",
         discover : "Glenn T. Seaborg, Albert Ghiorso, Ralph A. James",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3Y1dnRjZHMwNmptc3k1YTU3aWFwa2Z1YXAwM3ljOWU5cjNlem5xMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rud8KkvmY7fMQGgQxN/giphy-downsized-large.gif",
         desc : "Americium (Am), synthetic chemical element (atomic number 95) of the actinoid series of the periodic table. Unknown in nature, americium (as the isotope americium-241) was artificially produced from plutonium-239 (atomic number 94) in 1944 by American chemists Glenn T. Seaborg, Ralph A. James, Leon O. Morgan, and Albert Ghiorso in a nuclear reactor. It was the fourth transuranium element to be discovered (curium, atomic number 96, was discovered a few months previously). The element was named after the United States of America. The metal is silvery white and tarnishes slowly in dry air at room temperature. The isotope americium-241 is the most important because of its availability. This isotope is produced by multiple neutron capture in nuclear reactors and has been isolated in kilogram amounts from plutonium and other actinoids in used nuclear fuel. Americium-241 has been used industrially in fluid-density gauges, thickness gauges, aircraft fuel gauges, and distance-sensing devices, all of which use its gamma radiation. The isotope’s alpha-particle emission is exploited in smoke detectors. All isotopes of americium are radioactive; the stablest isotope, americium-243, has proved more convenient for chemical investigations because of its longer half-life (7,370 years, compared with 433 years for americium-241). Americium has four well-characterized oxidation states, from +3 to +6, in acidic aqueous solution with the following ionic species: Am3+, pink; Am4+, rose (very unstable); AmO2 +, yellow; and AmO22+, light tan. "
      },

      "cm" :{
         elementName : "Curium",
         elementSymbol : "(Cm)",
         atomNoTop : "96",
         elementType : "Actinide",
         atnNo : "96",
         atnMass : "247 u",
         block : "f-Block",
         discover : "Glenn T. Seaborg, Albert Ghiorso, Ralph A. James",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHpkMW1laXE4ZDZlZDR2NjAwcXZpZWwxdno2YXRybGxhend4bTdzZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kDC2trsnt9ubDUm0xo/giphy-downsized-large.gif",
         desc : "Curium (Cm), synthetic chemical element of the actinoid series of the periodic table, atomic number 96. Unknown in nature, curium (as the isotope curium-242) was discovered (summer 1944) at the University of Chicago by American chemists Glenn T. Seaborg, Ralph A. James, and Albert Ghiorso in a sample of a plutonium isotope, plutonium-239, that had been bombarded by helium ions (alpha particles) in the 152-cm (60-inch) cyclotron at the University of California, Berkeley. It was the third transuranium element to be discovered. The element was named after French physicists Pierre and Marie Curie. Curium is a silvery metal. All of its isotopes are radioactive. For chemical research, curium-242 (163-day half-life) has been supplanted by curium-244 (18.1-year half-life) and the still longer-lived isotope curium-248, which are built up from plutonium-239 by neutron irradiation. Curium exhibits its common +3 oxidation state as the very faint yellow Cm3+ ion in aqueous solution, as the sesquioxide Cm2O3, and as the trihalides; it is chemically similar to the other tripositive actinoid elements and to the lanthanoid elements. The +4 oxidation state appears in the black dioxide CmO2 and as the Cm4+ ion complexed with the fluoride ion. Natural neodymium is a mixture of seven different isotopes. Five of them are stable—neodymium-142 (27.13 percent), neodymium-146 (17.19 percent), neodymium-143 (12.18 percent), neodymium-145 (8.30 percent), and neodymium-148 (5.76 percent)—and two are radioactive, neodymium-144 (23.80 percent) and neodymium-150 (5.64 percent). "
      },


      "bk" :{
         elementName : "Berkelium",
         elementSymbol : "(Bk)",
         atomNoTop : "97",
         elementType : "Actinide",
         atnNo : "97",
         atnMass : "247 u",
         block : "f-Block",
         discover : "Glenn T. Seaborg, Albert Ghiorso",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmR3ZDYwN2V2ZDVqbGxjN3ozNmFxY3M2Mzk2MDVtdDJraTVqZWNlNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hSXBfOQYT5ukk8FUgO/giphy-downsized-large.gif",
         desc : "Berkelium (Bk), synthetic chemical element of the actinoid series of the periodic table, atomic number 97. Not occurring in nature, berkelium (as the isotope berkelium-243) was discovered in December 1949 by American chemists Stanley G. Thompson, Albert Ghiorso, and Glenn T. Seaborg at the University of California, Berkeley, as a product resulting from the helium-ion (alpha-particle) bombardment of americium-241 (atomic number 95) in a 152-cm (60-inch) cyclotron. The element was named after the city of Berkeley, where it was discovered. All berkelium isotopes are radioactive; Berkelium-249 (330-day half-life) has been widely used in the chemical studies of the element because it can be produced in weighable amounts that are isotopically pure by nuclear reactions beginning with curium-244. The only use of berkelium has been in the synthesis of heavier elements such as tennessine. Metallic berkelium has been prepared; it is electropositive, reactive, and silver-coloured like the other actinoid metals, with a specific gravity of 14.8. Tracer chemical investigations have shown that berkelium exists in aqueous solutions in the +3 and +4 oxidation states, presumably as Bk3+ and Bk4+ ions. The solubility properties of berkelium in its two oxidation states are entirely analogous to those of the other actinoids and to the lanthanoid elements (especially cerium) in the corresponding oxidation states. Solid compounds, including the oxides BkO2 and Bk2O3 and the trihalides such as the trichloride BkCl3, have been synthesized on the submicrogram scale."
      },


      "cf" :{
         elementName : "Californium",
         elementSymbol : "(Cf)",
         atomNoTop : "98",
         elementType : "Actinide",
         atnNo : "98",
         atnMass : "251 u",
         block : "f-Block",
         discover : "Glenn T. Seaborg, Albert Ghiorso",
         link : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDZUgDycB7ExuuLdJVALo2d1ja1c_KRzS0BQ&usqp=CAU",
         desc : "Californium (Cf), synthetic chemical element of the actinoid series of the periodic table, atomic number 98. Not occurring in nature, californium (as the isotope californium-245) was discovered (1950) by American chemists Stanley G. Thompson, Kenneth Street, Jr., Albert Ghiorso, and Glenn T. Seaborg at the University of California, Berkeley, as a product resulting from the helium-ion bombardment of curium-242 (atomic number 96) in the 152-cm (60-inch) cyclotron, followed by chemical separation from other elements by chromatography. The element was named after the state of California, where it was discovered. All californium isotopes are radioactive; the long-lived isotopes are produced from berkelium-249 or from californium-249. They are californium-249 (351-year half-life), californium-250 (13-year half-life), californium-251 (898-year half-life), and californium-252 (2.645-year half-life). The isotope californium-249 has been used in tracer levels and microgram amounts to investigate the chemistry of californium (which exhibits an oxidation state of +3 in aqueous solution) and for preparing microgram quantities of compounds such as the oxychloride CfOCl, the oxides Cf2O3 and CfO2, and the trichloride CfCl3. The dihalides CfCl2, CfBr2, and CfI2 have been made. There is also some evidence from electrochemical studies in solutions for a +2 state. Californium-252, because 3 percent of its decay occurs by spontaneous fission, is industrially and medically important as a very intense source of neutrons. One microgram releases 170,000,000 neutrons per minute."
      },


      "es" :{
         elementName : "Einsteinium",
         elementSymbol : "(Es)",
         atomNoTop : "99",
         elementType : "Actinide",
         atnNo : "99",
         atnMass : "252 u",
         block : "f-Block",
         discover : "Glenn T. Seaborg, Albert Ghiorso",
         link : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjIyaWdwNGI1Zjh5bXB0djU2c2dnNWdpYjVvNXh2eWM1M3ozYWlnayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1APhwnhp7loe6bd0m6/giphy-downsized-large.gif",
         desc : "Einsteinium (Es), synthetic chemical element of the actinoid series of the periodic table, atomic number 99. Not occurring in nature, einsteinium (as the isotope einsteinium-253) was first produced by intense neutron irradiation of uranium-238 during the detonation of nuclear weapons. This isotope was identified in December 1952 by Albert Ghiorso and coworkers at Berkeley, California, in debris taken from the first thermonuclear (hydrogen bomb) explosion, “Mike,” in the South Pacific (November 1952). The element was named after the German-born physicist Albert Einstein. The material was first collected on filter paper by drone airplanes flying through the radioactive explosion clouds; later, einsteinium and element 100 (fermium) were positively identified in coral gathered from Enewetak Atoll. In each case the identification required chemical separation and observations of characteristic nuclear reactions in laboratories. All einsteinium isotopes are radioactive. Mixtures of the isotopes einsteinium-253 (20.5-day half-life), einsteinium-254 (276-day half-life), and einsteinium-255 (39.8-day half-life) can be produced by intensive slow-neutron irradiation of elements of lower atomic number, such as plutonium. Einsteinium has chemical properties very similar to those of the other actinoid elements in the tripositive state. Einsteinium-255 and einsteinium-256 eject electrons to form isotopes of fermium (atomic number 100), and mendelevium (atomic number 101) isotopes have been produced by bombarding einsteinium-253 “targets” with alpha particles in cyclotrons or linear accelerators."
      },

      "fm" :{
         elementName : "Fermium",
         elementSymbol : "(Fm)",
         atomNoTop : "100",
         elementType : "Actinide",
         atnNo : "100",
         atnMass : "257 u",
         block : "f-Block",
         discover : "Glenn T. Seaborg, Albert Ghiorso",
         link : "https://c8.alamy.com/comp/2B7M2NJ/3d-render-of-atom-structure-of-francium-isolated-over-white-background-protons-are-represented-as-red-spheres-neutron-as-yellow-spheres-electrons-as-2B7M2NJ.jpg",
         desc : "Fermium (Fm), synthetic chemical element of the actinoid series of the periodic table, atomic number 100. Fermium (as the isotope fermium-255) is produced by the intense neutron irradiation of uranium-238 and was first positively identified by American chemist Albert Ghiorso and coworkers at Berkeley, California, in debris taken from the first thermonuclear (hydrogen bomb) test explosion (November 1952), “Mike,” in the South Pacific. The element was named after the Italian-born American physicist Enrico Fermi. All fermium isotopes are radioactive. Mixtures of the isotopes fermium-254 (3.24-hour half-life), fermium-255 (20.1-hour half-life), fermium-256 (2.6-hour half-life), and fermium-257 (100.5-day half-life) have been produced in a high-neutron-flux reactor by the intense slow-neutron irradiation of elements of lower atomic number, such as plutonium. The stability of the isotope fermium-257 would make it possible to work with weighable amounts of fermium. However, the only practical production method of fermium, multiple neutron capture in a high-flux reactor, has yielded only picogram (1 picogram = 10−12 gram) amounts of fermium-257, too small to carry out chemistry with pure samples. Therefore, all studies of fermium chemistry have been done on the tracer scale. Pure fermium metal has not been prepared, but volatility studies have been carried out with alloys that are dilute solutions of fermium metal in samarium and ytterbium, indicating that fermium appears to be a divalent metal."
      },

      "md" :{
         elementName : "Mendelevium",
         elementSymbol : "(Md)",
         atomNoTop : "101",
         elementType : "Actinide",
         atnNo : "101",
         atnMass : "258 u",
         block : "f-Block",
         discover : "Glenn T. Seaborg",
         link : "https://www.shutterstock.com/shutterstock/photos/1920752141/display_1500/stock-vector-mendelevium-atomic-structure-has-atomic-number-atomic-mass-electron-configuration-and-energy-1920752141.jpg",
         desc : "Mendelevium (Md), synthetic chemical element of the actinoid series of the periodic table, atomic number 101. It was the first element to be synthesized and discovered a few atoms at a time. Not occurring in nature, mendelevium (as the isotope mendelevium-256) was discovered (1955) by American chemists Albert Ghiorso, Bernard G. Harvey, Gregory R. Choppin, Stanley G. Thompson, and Glenn T. Seaborg at the University of California, Berkeley, as a product resulting from the helium-ion (alpha-particle) bombardment of a minute quantity (about a billion atoms) of einsteinium-253 (atomic number 99). The element was named after Russian chemist Dmitry Mendeleyev. In about a dozen repetitions of the experiment, the team of scientists produced 17 atoms of mendelevium, which were identified by the ion-exchange adsorption-elution method (mendelevium behaved like its rare-earth homologue thulium) and by the electron-capture decay of its daughter isotope fermium-256. Fifteen other isotopes of mendelevium, all radioactive, have been discovered. The stablest is mendelevium-258 (51.5-day half-life). Studied by means of radioactive tracer techniques, mendelevium exhibits a predominant +3 oxidation state, as would be expected by its position in the actinoid series; a slightly stable +2 oxidation state is also known."
      },


      "no" :{
         elementName : "Nobelium",
         elementSymbol : "(No)",
         atomNoTop : "102",
         elementType : "Actinide",
         atnNo : "102",
         atnMass : "259 u",
         block : "f-Block",
         discover : "Glenn T. Seaborg, Joint Institutition",
         link : "https://media.istockphoto.com/id/1409437604/vector/no-nobelium-element-information-facts-properties-trends-uses-and-comparison-periodic-table.jpg?s=612x612&w=is&k=20&c=4k1xoAoY2jZY71LXM_ELem-ylLyEtyyYNcQpOWYCYz8=",
         desc : "Nobelium (No), synthetic chemical element of the actinoid series of the periodic table, atomic number 102. The element was named after Swedish chemist Alfred Nobel. Not occurring in nature, nobelium was first claimed by an international team of scientists working at the Nobel Institute of Physics in Stockholm in 1957. They reported synthesis of an isotope of element 102 (either isotope 253 or 255) that decayed by emitting alpha particles with a half-life of about 10 minutes. They named it nobelium. In 1958 American chemists Albert Ghiorso, T. Sikkeland, J.R. Walton, and Glenn T. Seaborg at the University of California, Berkeley, reported the isotope 254 as a product of the bombardment of curium (atomic number 96) with carbon ions (atomic number 6) in a heavy-ion linear accelerator. In the same year, a Soviet scientific team led by Georgy Flerov at the Joint Institute for Nuclear Research in Dubna, Russia, achieved a similar result. Other experiments performed in the Soviet Union (at the I.V. Kurchatov Institute of Atomic Energy, Moscow, and at Dubna) and in the United States (Berkeley) failed to confirm the Stockholm discovery. Subsequent research in the following decade (primarily at Berkeley and Dubna) led the International Union of Pure and Applied Chemistry to conclude that Dubna papers published in 1966 established the existence of the isotope nobelium-254 with an alpha-decay half-life of about 51 seconds. Of the isotopes of nobelium that have been produced, nobelium-259 (58-minute half-life) is the stablest. "
      },


      "lr" :{
         elementName : "Lawrencium",
         elementSymbol : "(Lr)",
         atomNoTop : "103",
         elementType : "Actinide",
         atnNo : "103",
         atnMass : "262 u",
         block : "f-Block",
         discover : "Albert Ghiorso",
         link : "https://www.shutterstock.com/shutterstock/photos/1920753041/display_1500/stock-vector-lawrencium-atomic-structure-has-atomic-number-atomic-mass-electron-configuration-and-energy-1920753041.jpg",
         desc : "Lawrencium (Lr), synthetic chemical element, the 14th member of the actinoid series of the periodic table, atomic number 103. Not occurring in nature, lawrencium (probably as the isotope lawrencium-257) was first produced (1961) by chemists Albert Ghiorso, T. Sikkeland, A.E. Larsh, and R.M. Latimer at the University of California, Berkeley, by bombarding a mixture of the longest-lived isotopes of californium (atomic number 98) with boron ions (atomic number 5) accelerated in a heavy-ion linear accelerator. The element was named after American physicist Ernest O. Lawrence. A team of Soviet scientists at the Joint Institute for Nuclear Research in Dubna discovered (1965) lawrencium-256 (26-second half-life), which the Berkeley group later used in a study with approximately 1,500 atoms to show that lawrencium behaves more like the tripositive elements in the actinoid series than like predominantly dipositive nobelium (atomic number 102). The longest-lasting isotope, lawrencium-262, has a half-life of about 3.6 hours. "
      },


      "rf" :{
         elementName : "Rutherfordium",
         elementSymbol : "(Rf)",
         atomNoTop : "104",
         elementType : "Transition Metal",
         atnNo : "104",
         atnMass : "261 u",
         block : "d-Block",
         discover : "Albert Ghiorso",
         link : "https://c8.alamy.com/comp/2N9MH3R/rutherfordium-atom-with-mass-and-energy-levels-vector-illustration-2N9MH3R.jpg",
         desc : "Rutherfordium (Rf), an artificially produced radioactive transuranium element in Group IVb of the periodic table, atomic number 104. Soviet scientists at the Joint Institute for Nuclear Research at Dubna, Russia, U.S.S.R., announced in 1964 the discovery of element 104, which they named kurchatovium, symbol Ku (for Igor Kurchatov, a Soviet nuclear physicist). In 1969, a group of American researchers at the Lawrence Radiation Laboratory of the University of California at Berkeley announced that they had identified isotopes of the element, different from the one identified by the Soviets; the Americans then proposed the name rutherfordium, in honour of the British physicist Ernest Rutherford. In their experiment, the Soviets bombarded plutonium-242 with ions of neon-22, claiming to have obtained an isotope of element 104 that had a mass number of 260 and a half-life of 0.3 second. The Soviets then performed a series of chemical experiments with the isotope to demonstrate that it behaved in a manner that had been predicted for the element. When the workers at Dubna later used a more refined measuring technique, however, they found that the half-life of the isotope was 0.1 second, not 0.3 second as originally reported. This finding cast doubt on the chemical experiments with the element, because the results of those experiments could not have been obtained with atoms having a half-life of 0.1 second. The investigators at Berkeley subsequently, by bombarding curium-248 with oxygen-18, synthesized an isotope of element 104 that has a mass number of 261 and a half-life of 70 seconds."
      },

      "db" :{
         elementName : "Dubnium",
         elementSymbol : "(Db)",
         atomNoTop : "105",
         elementType : "Transition Metal",
         atnNo : "105",
         atnMass : "262 u",
         block : "d-Block",
         discover : "Albert Ghiorso, Joint Institute for Nuclear Research",
         link : "https://media.istockphoto.com/id/1408827288/vector/db-dubnium-element-information-facts-properties-trends-uses-and-comparison-periodic-table-of.jpg?s=1024x1024&w=is&k=20&c=J9yZwUucQ-Fm5pvWqxRNzqPM43eft-aLnYoVHpzHgTc=",
         desc : "Dubnium (Db), an artificially produced radioactive transuranium element in Group Vb of the periodic table, atomic number 105. The discovery of dubnium (element 105), like that of rutherfordium (element 104), has been a matter of dispute between Soviet and American scientists. The Soviets may have synthesized a few atoms of element 105 in 1967 at the Joint Institute for Nuclear Research in Dubna, Russia, U.S.S.R., by bombarding americium-243 with neon-22 ions, producing isotopes of element 105 having mass numbers of 260 and 261 and half-lives of 0.1 second and 3 seconds, respectively. Because the Dubna group did not propose a name for the element at the time they announced their preliminary data—a practice that has been customary following the discovery of a new element—it was surmised by American scientists that the Soviets did not have strong experimental evidence to substantiate their claims. Soviet scientists contended, however, that they did not propose a name in 1967 because they preferred to accumulate more data about the chemical and physical properties of the element before doing so. After completing further experiments, they proposed the name nielsbohrium. The American team could not duplicate the Soviet experiment; but, when its members bombarded californium-249 with the nuclei of nitrogen-15 atoms, they produced “hahnium-260,” which had a half-life of about 1.6 seconds. As further evidence of their discovery, the scientists at Berkeley measured the amount of energy emitted by “hahnium-260” as it decayed, as well as the elements produced in the process. "
      },

      "sg" :{
         elementName : "Seaborgium",
         elementSymbol : "(Sg)",
         atomNoTop : "106",
         elementType : "Transition Metal",
         atnNo : "106",
         atnMass : "264 u",
         block : "d-Block",
         discover : "Lawrence Berkeley National Laboratory",
         link : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuo-mNSZoRopvvwZD64VcP6urCXtwTt1jLrQ4ePKHoYI4H9yTNXK2D359O9GV6cOSNPgs&usqp=CAU",
         desc : "Seaborgium (Sg), an artificially produced radioactive element in Group VIb of the periodic table, atomic number 106. In June 1974, Georgy N. Flerov of the Joint Institute for Nuclear Research at Dubna, Russia, U.S.S.R., announced that his team of investigators had synthesized and identified element 106. In September of the same year, a group of American researchers headed by Albert Ghiorso at the Lawrence Radiation Laboratory (now Lawrence Berkeley Laboratory) of the University of California at Berkeley reported their synthesis of the identical element. Disagreement arose between the two groups over the results of their experiments, both having used different procedures to achieve the synthesis. The Soviet scientists had bombarded lead-207 and lead-208 with ions of chromium-54 to produce an isotope of element 106 having a mass number of 259 and decaying with a half-life of approximately 0.007 second. The American researchers, on the other hand, had bombarded a heavy radioactive target of californium-249 with projectile beams of oxygen-18 ions, which resulted in the creation of a different isotope of element 106—one with a mass number of 263 and a half-life of 0.9 second. Russian researchers at Dubna reported their synthesis of two isotopes of the element in 1993, and a team of researchers at Lawrence Berkeley duplicated the Ghiorso group’s original experiment that same year. In honour of the American nuclear chemist Glenn T. Seaborg, American researchers tentatively named the element seaborgium, which was later ratified by the International Union of Pure and Applied Chemistry. "
      },

      "bh" :{
         elementName : "Bohrium",
         elementSymbol : "(Bh)",
         atomNoTop : "107",
         elementType : "Transition Metal",
         atnNo : "107",
         atnMass : "264 u",
         block : "d-Block",
         discover : "Gesellschaft für Schwerionenforschung",
         link : "https://www.chemistrylearner.com/wp-content/uploads/2018/05/Bohrium-Electron-Configuration.jpg",
         desc : "Bohrium (Bh), a synthetic element in Group VIIb of the periodic table. It is thought to be chemically similar to the rare metal rhenium. In 1976 Soviet scientists at the Joint Institute for Nuclear Research in Dubna, Russia, U.S.S.R., announced that they had synthesized element 107, later given the official name bohrium, by bombarding a target of bismuth-209 with ions of chromium-54. The resultant collisions were reported to have produced an isotope of the element with a mass number of 261 and a half-life of 1–2 milliseconds. The existence of the element was confirmed by West German physicists at the Institute for Heavy Ion Research (Gesellschaft für Schwerionenforschung [GSI]) in Darmstadt."
      },

      "hs" :{
         elementName : "Hassium",
         elementSymbol : "(Hs)",
         atomNoTop : "108",
         elementType : "Transition Metal",
         atnNo : "108",
         atnMass : "269 u",
         block : "d-Block",
         discover : "Peter Armbruster, Gottfried Münzenberg",
         link : "https://tse4.mm.bing.net/th?id=OIP._ZsI55qXvCy0i7XFOnOQdAHaFX&pid=Api&P=0&h=180",
         desc : "Hassium (Hs), an artificially produced element belonging to the transuranium group, atomic number 108. It was synthesized and identified in 1984 by West German researchers at the Institute for Heavy Ion Research (Gesellschaft für Schwerionenforschung [GSI]) in Darmstadt. On the basis of its position in the periodic table of the elements, it is expected to have chemical properties similar to those of osmium. The GSI research team, led by Peter Armbruster, produced an isotope of hassium in a fusion reaction by irradiating lead-208 with ions of iron-58. The isotope, which has a mass number of 265, is exceedingly unstable and has a half-life of only 2 milliseconds. Experiments conducted by A.G. Demin and other researchers at the Joint Institute for Nuclear Research in Dubna, Russia, U.S.S.R., suggested the existence of two more isotopes of hassium with mass numbers of 263 and 264."
      },

      "mt" :{
         elementName : "Meitnerium",
         elementSymbol : "(Mt)",
         atomNoTop : "109",
         elementType : "Unknown Chemical Properties",
         atnNo : "109",
         atnMass : "278 u",
         block : "d-Block",
         discover : "Peter Armbruster, Gottfried Münzenberg",
         link : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3cIbKsTSUJwJehVowMgY2lQxC2yIh6KiVvLfBEBIq548NIDCjW_21AnGPam_c40Ry8wg&usqp=CAU",
         desc : "Meitnerium (Mt), an artificially produced element belonging to the transuranium group, atomic number 109. It is predicted to have chemical properties resembling those of iridium. The element is named in honour of Austrian-born physicist Lise Meitner. In 1982 West German physicists at the Institute for Heavy Ion Research (Gesellschaft für Schwerionenforschung [GSI]) in Darmstadt synthesized an isotope of meitnerium with a mass number of 266. Using a high-energy linear accelerator, the GSI investigators, under the direction of Peter Armbruster, bombarded bismuth-209 targets with beams of iron-58 ions for roughly 10 days. The resultant fusion reaction between the bismuth and iron atoms yielded only a single nucleus of the new element; however, the sensitivity of the detection technique employed left little doubt as to the validity of the identification. The most stable isotope, meitnerium-276, has a half-life of 0.72 second."
      },


      "ds" :{
         elementName : "Damstadium",
         elementSymbol : "(Ds)",
         atomNoTop : "110",
         elementType : "Unknown Chemical Properties",
         atnNo : "110",
         atnMass : "281 u",
         block : "d-Block",
         discover : "Sigurd Hofmann",
         link : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtzdHMpYRLDzK2TjHAKlTbkoTFFecM6bnT3sQu8t8L6F-zlxOrzggfoa7hTGotSfkPdE&usqp=CAU",
         desc : "Darmstadtium (Ds), artificially produced transuranium element of atomic number 110. In 1995 scientists at the Institute for Heavy Ion Research (Gesellschaft für Schwerionenforschung [GSI]) in Darmstadt, Germany, announced the formation of atoms of element 110 when lead-208 was fused with nickel-62. The atoms of element 110 had an atomic weight of 269 and decayed after 260 microseconds (1 microsecond = 1 millionth of a second) into atoms of hassium-265 by emitting an alpha particle (helium nucleus). Element 110 was named darmstadtium after the German city where the GSI is located. Several other isotopes of darmstadtium are known; the longest-lasting, darmstadtium-281, has a half-life of about 20 seconds. Its chemical properties may be similar to those of platinum."
      },


      "rg" :{
         elementName : "Roentgenium",
         elementSymbol : "(Rg)",
         atomNoTop : "111",
         elementType : "Unknown Chemical Properties",
         atnNo : "111",
         atnMass : "282 u",
         block : "d-Block",
         discover : "Victor Ninov, Sigurd Hofmann",
         link : "https://media.istockphoto.com/id/1409463161/vector/rg-roentgenium-element-information-facts-properties-trends-uses-and-comparison-periodic.jpg?s=1024x1024&w=is&k=20&c=8oEyN42pn6nb8dqymStAp8hhxKT3fYsLuaRcbKuhtOU=",
         desc : "Roentgenium (Rg), artificially produced transuranium element of atomic number 111. In 1994 scientists at the Institute for Heavy Ion Research (Gesellschaft für Schwerionenforschung [GSI]) in Darmstadt, Ger., formed atoms of element 111 when atoms of bismuth-209 were bombarded with atoms of nickel-62. The atoms of element 111 had an atomic weight of 272 and decayed after 1.5 milliseconds into atoms of meitnerium-268 by emitting an alpha particle (helium nucleus). Element 111 was named roentgenium after the German physicist Wilhelm Röntgen, the discoverer of X-rays. The longest-lasting isotope, roentgenium-280, has a half-life of 3.6 seconds and decays to meitnerium-276. Roentgenium’s chemical properties may be similar to those of gold."
      },


      "cn" :{
         elementName : "Copernicium",
         elementSymbol : "(Cn)",
         atomNoTop : "112",
         elementType : "Unknown Chemical Properties",
         atnNo : "112",
         atnMass : "285 u",
         block : "d-Block",
         discover : "Victor Ninov, Sigurd Hofmann",
         link : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRduwh176iusnMwAdRuOjUv2egkQ-wmN8GmpK6T5OAFETIq8OBCCKGjtAjr-3LA0oaeSSw&usqp=CAU",
         desc : "Copernicium (Cn), artificially produced transuranium element of atomic number 112. In 1996 scientists at the Institute for Heavy Ion Research (Gesellschaft für Schwerionenforschung [GSI]) in Darmstadt, Ger., announced the production of atoms of copernicium from fusing zinc-70 with lead-208. The atoms of copernicium had an atomic weight of 277 and decayed after 0.24 millisecond by emission of an alpha particle (helium nucleus) to darmstadtium-273. Several other isotopes of copernicium are known; the longest lasting, isotope 285, has a half-life of 34 seconds. Its chemical properties may be similar to those of mercury. In June 2009 the discovery of element 112 by the GSI was recognized by the International Union of Pure and Applied Chemistry (IUPAC). The discoverers named it copernicium, after Polish astronomer Nicolaus Copernicus, in July 2009, and IUPAC approved that name in February 2010."
      },


      "nh" :{
         elementName : "Nihonium",
         elementSymbol : "(nh)",
         atomNoTop : "113",
         elementType : "Unknown Chemical Properties",
         atnNo : "113",
         atnMass : "286 u",
         block : "p-Block",
         discover : "Riken, JINR, livermore",
         link : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjEjkma7a_Foq0MBHyUJCzryhy6ejuuVki0phw96VDbszP4JwiLXTtnmwoeGxSvNW8SqU&usqp=CAU",
         desc : "Nihonium (Nh), also called element 113 or ununtrium, artificially produced transuranium element of atomic number 113. In 2004 scientists at the RIKEN Nishina Center for Accelerator-Based Science in Saitama, Japan announced the production of one atom of element 113, which was formed when bismuth-209 was fused with zinc-70. Extremely radioactive, the atom decayed through emission of alpha particles (helium nuclei) to dubnium-262 in about 2.5 seconds. Its chemical properties may be similar to those of thallium. The element has six isotopes with known and confirmed half-lives, the longest-lived of which is nihonium-286 with a half-life of 19.6 seconds; most of these radioactive isotopes were not directly synthesized but occured as decay products. In January 2016 the discovery of element 113 was recognized by the International Union of Pure and Applied Chemistry (IUPAC) and the International Union of Pure and Applied Physics (IUPAP). The discoverers named it nihonium after the Japanese word for Japan. The name nihonium was approved by IUPAC in November 2016."
      },

      "fl" :{
         elementName : "Flerovium",
         elementSymbol : "(fl)",
         atomNoTop : "114",
         elementType : "Unknown Chemical Properties",
         atnNo : "114",
         atnMass : "289 u",
         block : "p-Block",
         discover : "Yuri Oganessian, Sigurd Hofmann",
         link : "https://creationwiki.org/pool/images/thumb/8/86/Electron_shell_Flerovium.png/150px-Electron_shell_Flerovium.png",
         desc : "Flerovium (Fl), artificially produced transuranium element of atomic number 114. In 1999 scientists at the Joint Institute for Nuclear Research in Dubna, Russia, and the Lawrence Livermore National Laboratory in Livermore, California, produced atoms of flerovium from colliding atoms of calcium-48 with targets of plutonium-244 and -242. The atoms of flerovium then decayed through emission of an alpha particle (helium nucleus) into atoms of copernicium. The longest-lasting isotope of flerovium has an atomic weight of 289 and a half-life of 0.97 second. Three other isotopes of flerovium have half-lives of 0.52, 0.51, and 0.16 second. These long half-lives were seen as the “shores” of the “island of stability,” a term for atoms with a certain number of protons and neutrons that make them much more stable than other transuranium elements. However, theoretical calculations point to the as-yet-unproduced isotope of flerovium with an atomic weight of 298 as being the “peak” of the island. Flerovium’s chemical properties may be similar to those of lead. In June 2011 the discovery of element 114 was recognized by the International Union of Pure and Applied Chemistry (IUPAC) and the International Union of Pure and Applied Physics (IUPAP). The discoverers named it flerovium, after Russian physicist Georgy Flerov in December 2011, pending approval by IUPAC."
      },

      "mc" :{
         elementName : "Moscovium",
         elementSymbol : "(Mc)",
         atomNoTop : "115",
         elementType : "Unknown Chemical Properties",
         atnNo : "115",
         atnMass : "289 u",
         block : "p-Block",
         discover : "Joint Institute for Nuclear Research",
         link : "https://upload.wikimedia.org/wikipedia/commons/2/20/Electron_shell_115_Moscovium_-_no_label.svg",
         desc : "Moscovium (Mc), artificially produced transuranium element of atomic number 115. In 2010 scientists at the Joint Institute for Nuclear Research in Dubna, Russia, and at the Lawrence Berkeley National Laboratory in Berkeley, California, U.S., announced the production of four atoms of moscovium when calcium-48 was fused with americium-243. Two isotopes of moscovium were produced with atomic weights of 287 and 288; these isotopes decayed in 46.6 and 19–280 milliseconds, respectively. Its chemical properties may be similar to those of bismuth. In January 2016 the discovery of moscovium was recognized by the International Union of Pure and Applied Chemistry (IUPAC) and the International Union of Pure and Applied Physics (IUPAP). The discoverers named it moscovium after the Moscow oblast where the Joint Institute for Nuclear Research is located. The name moscovium was approved by IUPAC in November 2016. Moscovium is highly radioactive and has no known biological or industrial use beyond that of research. Both isotopes of moscovium have been shown to produce nihonium daughter nuclei after undergoing alpha decay."
      },

      "lv" :{
         elementName : "Livermorium",
         elementSymbol : "(Lv)",
         atomNoTop : "116",
         elementType : "Unknown Chemical Properties",
         atnNo : "116",
         atnMass : "293 u",
         block : "p-Block",
         discover : "Joint Institute for Nuclear Research, Yuri Oganessian",
         link : "https://upload.wikimedia.org/wikipedia/commons/6/69/Electron_shell_116_Livermorium.svg",
         desc : "Livermorium (Lv), artificially produced transuranium element of atomic number 116. In 2000 scientists at the Joint Institute for Nuclear Research in Dubna, Russia, and the Lawrence Livermore National Laboratory in Livermore, California, announced the production of atoms of livermorium when curium-248 was fused with calcium-48. The resulting atoms of livermorium had an atomic weight of 292 and decayed through the emission of an alpha particle (helium nucleus) into flerovium. Three other isotopes of livermorium are known; the longest-lasting has an atomic weight of 293 and a half-life of 53 milliseconds. Its chemical properties may be similar to those of polonium. In June 2011 the discovery of element 116 was recognized by the International Union of Pure and Applied Chemistry (IUPAC) and the International Union of Pure and Applied Physics (IUPAP). The discoverers named it livermorium after Lawrence Livermore National Laboratory in December 2011, and IUPAC approved the name in May 2012."
      },

      "ts" :{
         elementName : "Tennessine",
         elementSymbol : "(Ts)",
         atomNoTop : "117",
         elementType : "Unknown Chemical Properties",
         atnNo : "117",
         atnMass : "293 u",
         block : "p-Block",
         discover : "Joint Institute for Nuclear Research, Yuri Oganessian",
         link : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Electron_shell_117_Tennessine.svg/1200px-Electron_shell_117_Tennessine.svg.png",
         desc : "Tennessine (Ts), artificially produced transuranium element of atomic number 117. In 2010 Russian and American scientists announced the production of six atoms of tennessine, which were formed when 22 milligrams of berkelium-249 were bombarded with atoms of calcium-48, at the cyclotron at the Joint Institute for Nuclear Research in Dubna, Russia. These atoms were of atomic weights 293 and 294. The five atoms with atomic weight 293 decayed into atoms of roentgenium, and that with a weight of 294 decayed into an atom of dubnium. During these decays, they also formed atoms of atomic number 115, or moscovium, which was the first time that element was formed. Its chemical properties may be similar to those of astatine. In January 2016 the discovery of element 117 was recognized by the International Union of Pure and Applied Chemistry (IUPAC) and the International Union of Pure and Applied Physics (IUPAP). The discoverers named it tennessine after the state of Tennessee, where centres of research into transuranium elements (such as Oak Ridge National Laboratory, the University of Tennessee at Knoxville, and Vanderbilt University) are located. The name tennessine was approved by IUPAC in November 2016."
      },


      "og" :{
         elementName : "Oganesson",
         elementSymbol : "(Og)",
         atomNoTop : "118",
         elementType : "Unknown Chemical Properties",
         atnNo : "118",
         atnMass : "294 u",
         block : "p-Block",
         discover : "Joint Institute for Nuclear Research, Yuri Oganessian",
         link : "https://upload.wikimedia.org/wikipedia/commons/f/f3/Electron_shell_118_Oganesson.svg",
         desc : "Oganesson (Og), a transuranium element that occupies position 118 in the periodic table and is one of the noble gases. Oganesson is a synthetic element, and in 1999 scientists at Lawrence Berkeley National Laboratory in Berkeley, California, announced the production of atoms of oganesson as a result of the bombardment of lead-208 with atoms of krypton-86. However, in 2002 this result was retracted after it was discovered that some of the data had been falsified. In 2006 scientists at the Joint Institute for Nuclear Research at Dubna, Russia, announced that oganesson had been made in 2002 and 2005 in a cyclotron by the nuclear reaction of calcium-48 at an energy of 245 million electron volts (MeV) with a californium-249 target, with three neutrons and one atom of oganesson as the reaction products. Nearly a millisecond after creation, the oganesson nucleus decays into another transuranium element, livermorium, by emitting an alpha particle (helium nucleus). No physical or chemical properties of oganesson can be directly determined, since only a few atoms of oganesson have been produced, but it is likely that oganesson is a gas at room temperature. The chemistry of oganesson, like radon, is expected to reflect its anticipated metalloid properties. In January 2016 the discovery of element 118 was recognized by the International Union of Pure and Applied Chemistry (IUPAC) and the International Union of Pure and Applied Physics (IUPAP)."
      },


   };
for(let i=119;i<=236;i++){

   document.getElementById(`${i}`).addEventListener("click",()=>{
         let box = document.getElementById(`${i}`);
         
            clickedElement =  document.getElementById(`${i}`).children[1].textContent.toLowerCase();
            console.log(clickedElement);
            
            document.getElementById("header").style.filter = "blur(2px)";
            document.getElementById("blur").style.filter = "blur(2px)"
            document.getElementById("items").style.filter = "blur(2px)"
 

            document.getElementById('card').classList.add('displayCard');

            document.getElementById("card").classList.remove("card12");

            console.log(OuterObj[clickedElement].elementName);
            console.log(OuterObj[clickedElement].elementSymbol);
            console.log(OuterObj[clickedElement].atomNoTop)
            console.log(OuterObj[clickedElement].elementType);
            console.log(OuterObj[clickedElement].atnNo);
            console.log(OuterObj[clickedElement].atnMass);
            console.log(OuterObj[clickedElement].block);
            console.log(OuterObj[clickedElement].discover);
            console.log(OuterObj[clickedElement].link);

            if(alkali_metal.includes(`${i - 118}`)){
               document.getElementById("cardDescribition").style.outline ="3px solid #00758c";
               document.getElementById("cardDescribition").style.backgroundColor = "#daf7fe";
               document.getElementById("cardElement").style.outline = "3px solid #00758c";
               document.getElementById("cardElement").style.backgroundColor = "#00758c";
               document.getElementById("cardRoundColor").style.backgroundColor = "#daf7fe"
            }


            else if(alkaline_earth_metal.includes(`${i - 118}`)){
               document.getElementById("cardDescribition").style.outline ="3px solid #d70528";
               document.getElementById("cardDescribition").style.backgroundColor = "#ffebeb";
               document.getElementById("cardElement").style.outline = "3px solid #d70528";
               document.getElementById("cardElement").style.backgroundColor = "#d70528";
               document.getElementById("cardRoundColor").style.backgroundColor = "#ffebeb"
               document.getElementById("cardClose").style.color = "white"
            }


            else if(transition_metal.includes(`${i - 118}`)){
               document.getElementById("cardDescribition").style.outline ="3px solid #6232ec";
               document.getElementById("cardDescribition").style.backgroundColor = "#F5ECFD";
               document.getElementById("cardElement").style.outline = "3px solid #6232ec";
               document.getElementById("cardElement").style.backgroundColor = "#6232ec";
               document.getElementById("cardRoundColor").style.backgroundColor = "#F5ECFD"
            }


            else if(post_transition_metal.includes(`${i - 118}`)){
               document.getElementById("cardDescribition").style.outline ="3px solid #002c00";
               document.getElementById("cardDescribition").style.backgroundColor = "#dcfaeb";
               document.getElementById("cardElement").style.outline = "3px solid #002c00";
               document.getElementById("cardElement").style.backgroundColor = "#002c00";
               document.getElementById("cardRoundColor").style.backgroundColor = "#dcfaeb"
            }


            else if(metalloid.includes(`${i - 118}`)){
               document.getElementById("cardDescribition").style.outline ="3px solid #945700";
               document.getElementById("cardDescribition").style.backgroundColor = "#fef9e6";
               document.getElementById("cardElement").style.outline = "3px solid #945700";
               document.getElementById("cardElement").style.backgroundColor = "#945700";
               document.getElementById("cardRoundColor").style.backgroundColor = "#fef9e6"
            }


            else if(reactive_nonmetal.includes(`${i - 118}`)){
               document.getElementById("cardDescribition").style.outline ="3px solid #0060f0";
               document.getElementById("cardDescribition").style.backgroundColor = "#e6f0ff";
               document.getElementById("cardElement").style.outline = "3px solid #0060f0";
               document.getElementById("cardElement").style.backgroundColor = "#0060f0";
               document.getElementById("cardRoundColor").style.backgroundColor = "#e6f0ff"
            }


            else if(noble_gas.includes(`${i - 118}`)){
               document.getElementById("cardDescribition").style.outline ="3px solid #d43c73";
               document.getElementById("cardDescribition").style.backgroundColor = "#ffebee";
               document.getElementById("cardElement").style.outline 
= "3px solid #d43c73";
               document.getElementById("cardElement").style.backgroundColor = "#d43c73";
               document.getElementById("cardRoundColor").style.backgroundColor = "#ffebee";
               document.getElementById("cardClose").style.color = "white"
            }


            else if(lanthanide.includes(`${i - 118}`)){
               document.getElementById("cardDescribition").style.outline ="3px solid #174666";
               document.getElementById("cardDescribition").style.backgroundColor = "#e6f5ff";
               document.getElementById("cardElement").style.outline = "3px solid #174666";
               document.getElementById("cardElement").style.backgroundColor = "#174666";
               document.getElementById("cardRoundColor").style.backgroundColor = "#e6f5ff"
            }


            else if(actinide.includes(`${i - 118}`)){
               document.getElementById("cardDescribition").style.outline ="3px solid #cb4011";
               document.getElementById("cardDescribition").style.backgroundColor = "#ffeadb";
               document.getElementById("cardElement").style.outline = "3px solid #cb4011";
               document.getElementById("cardElement").style.backgroundColor = "#cb4011";
               document.getElementById("cardRoundColor").style.backgroundColor = "#ffeadb";
               document.getElementById("cardClose").style.color = "white"
            }


            else if(unknown_chemical_properties.includes(`${i - 118}`)){
               document.getElementById("cardDescribition").style.outline ="3px solid #3f374f";
               document.getElementById("cardDescribition").style.backgroundColor = "#e9e9ec";
               document.getElementById("cardElement").style.outline = "3px solid #3f374f";
               document.getElementById("cardElement").style.backgroundColor = "#3f374f";
               document.getElementById("cardRoundColor").style.backgroundColor = "#e9e9ec"
            }

         document.getElementById("cardElementName").innerHTML = OuterObj[clickedElement].elementName ;
         document.getElementById("cardElementSymbol").innerHTML = OuterObj[clickedElement].elementSymbol;
         document.getElementById("cardAtmNoTop").innerHTML = OuterObj[clickedElement].atomNoTop ;
         document.getElementById("cardElementType").innerHTML = OuterObj[clickedElement].elementType ;
         document.getElementById("cardAtnNo").innerHTML = OuterObj[clickedElement].atnNo ;
         document.getElementById("cardAtnMass").innerHTML = OuterObj[clickedElement].atnMass ;
         document.getElementById("cardBlock").innerHTML = OuterObj[clickedElement].block ;
         document.getElementById("cardDiscover").innerHTML = OuterObj[clickedElement].discover ;
         document.getElementById("cardDescribition").innerHTML = OuterObj[clickedElement].desc ;
         document.getElementById("card").style.display =  "block" ;

       image = document.getElementById("img");
       image.src = `${OuterObj[clickedElement].link}`;

   })

}


   document.getElementById("cardClose").addEventListener("click",()=>{


      // To Remove a opacity for full page
      for (let j = 118; j <= 236; j++) {
         document.getElementById(`${j}`).style.opacity = "1";
      }
       setTimeout(bluring,1000);
      
      document.getElementById("card").classList.remove("displayCard");  

      document.getElementById("card").classList.add("card12");
      
      let sto = setTimeout(displaynone,1900);

   })

   function bluring(){
      document.getElementById("header").style.filter = "blur(0px)";
      document.getElementById("blur").style.filter = "blur(0px)";
      document.getElementById("items").style.filter = "blur(0px)";
   }

   function displaynone(){
      document.getElementById("card").style.display =  "none" ;
      clearInterval("sto");
      
   }

   document.getElementById("alkaliBtn").addEventListener("click",()=>{

      document.getElementById("card").style.display =  "none" ;

   })

   document.getElementById("alkaliEarthBtn").addEventListener("click",()=>{

      document.getElementById("card").style.display =  "none" ;
      
   })

   document.getElementById("transitionBtn").addEventListener("click",()=>{

      document.getElementById("card").style.display =  "none" ;
      
   })


   document.getElementById("postTransitionBtn").addEventListener("click",()=>{

      document.getElementById("card").style.display =  "none" ;
      
   })


   document.getElementById("metaloidBtn").addEventListener("click",()=>{

      document.getElementById("card").style.display =  "none" ;
      
   })

   document.getElementById("reactive_nonmetalbtn").addEventListener("click",()=>{

      document.getElementById("card").style.display =  "none" ;
      
   })


   document.getElementById("nobelGasBtn").addEventListener("click",()=>{

      document.getElementById("card").style.display =  "none" ;
      
   })

   document.getElementById("lathanideBtn").addEventListener("click",()=>{

      document.getElementById("card").style.display =  "none" ;
      
   })


   document.getElementById("actinideBtn").addEventListener("click",()=>{

      document.getElementById("card").style.display =  "none" ;
      
   })

   document.getElementById("ucpBtn").addEventListener("click",()=>{

      document.getElementById("card").style.display =  "none" ;
      
   })

