var employee1 = [
{ name:"akhil",   age:24, salary:15000, dob:"20 july 1993"    },
{ name:"nitin",   age:24, salary:30000, dob:"29 sept 1992"    },
{ name:"mahesh",  age:25, salary:15000, dob:"5 aug 1992"      },
{ name:"sawtik",  age:24, salary:15000, dob:"2 october 1993"  },
{ name:"surabhi", age:27, salary:10000, dob:"8 july 1990"     },
{ name:"xyzabc",  age:27, salary:800,   dob:"8 july 1990"       },
{ name:"BCXYZA",  age:18, salary:999,   dob:"8 july 1998"        }
];
var temp=[];
for (var i=0;i<employee1.length;i++)
{
  temp.push(employee1[i].age);
}

temp.sort(function (x,y){
  return (x-y);
});

var obs={};
var ctr=1;
for(var i=0;i<temp.length;i++)
{
  if(temp[i]!=temp[i+1]){
    obs[new Number(temp[i]).toString()]=ctr;
    ctr=1;
  }
    else
    ctr++;
}

 var temps=[];
 var prev=0;
 var ind=0;
 var topt=0;
 for(var k in obs)
{

  //alert("key is " +k+" value is "+obs[k]);
  if(prev>=obs[k] || prev==0)
  {
        for(var i=0;i<obs[k];i++)
        temps.push(parseInt(k));
        prev=obs[k];
        ind+=obs[k];
        topt+=obs[k];
  }
  else if(prev<obs[k])
  {
      for(var i=0;i<obs[k];i++)
      {
        temps.splice(ind-topt,0,parseInt(k))
      }
      ind+=obs[k];
  }
}
document.getElementById("abc").innerHTML=temps;
