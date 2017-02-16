var employee1 = [
{ name:"akhil",   age:24, salary:15000, dob:"20 july 1993"    },
{ name:"nitin",   age:24, salary:30000, dob:"29 sept 1992"    },
{ name:"mahesh",  age:25, salary:15000, dob:"5 aug 1992"      },
{ name:"sawtik",  age:24, salary:15000, dob:"2 october 1993"  },
{ name:"surabhi", age:27, salary:10000, dob:"8 july 1990"     },
{ name:"xyzabc",  age:27, salary:800,   dob:"8 july 1990"       },
{ name:"BCXYZA",  age:18, salary:999,   dob:"8 july 1998"        }
];
var temp="";
for (var i=0;i<employee1.length;i++)
{
  if(employee1[i].salary>=5000)
    temp+=employee1[i].name+"<br>";
}
document.getElementById("abc").innerHTML=temp;
