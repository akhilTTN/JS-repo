var employee1 = [
{ name:"akhil",   age:24, salary:15000, dob:new Date("1993-07-20")    },
{ name:"nitin",   age:24, salary:30000, dob:new Date("1992-09-29")    },
{ name:"mahesh",  age:25, salary:15000, dob:new Date("1992-08-05")      },
{ name:"sawtik",  age:24, salary:15000, dob:new Date("1993-08-02")  },
{ name:"surabhi", age:27, salary:600,   dob:new Date("1990-07-08")     },
{ name:"xyzabc",  age:27, salary:800,   dob:new Date("1990-02-13")       },
{ name:"BCXYZA",  age:21, salary:999,   dob:new Date("1998-05-30")        }
];


var temp="";
var temps=[];
for(var i=0;i<employee1.length;i++)
{
  if(employee1[i].salary<1000 && employee1[i].age>20){
    temp+=employee1[i].name+"&nbsp;"+employee1[i].salary+"<br>";
    temps.push(employee1[i].name);
  }
}
document.getElementById("abc").innerHTML=temp;
var g="";
for(var i=0;i<temps.length;i++)
{
  for(var j=0;j<employee1.length;j++)
  {
    if(temps[i] == employee1[j].name){
    var ttt=employee1[j].salary*5;
    g+=employee1[j].name+"&nbsp;"+ttt+"<br>";
    employee1[j].salary=ttt;
    break;
  }
  }
  }
  document.getElementById("efg").innerHTML=g;
