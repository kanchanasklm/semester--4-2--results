








    












//4-2

let buttonEl=document.getElementById("button");
let finalResultEl=document.getElementById("result");

let CloudComputingEl=document.getElementById("CloudComputing");
let CyberSecurityEl=document.getElementById("CyberSecurity");
let RoboticsEl=document.getElementById("Robotics");
let Project2El=document.getElementById("Project2");
let CommunityServiceEl=document.getElementById("CommunityService");



let creddits=17; 
let result=0;
// let count=0;
function credits(subGrade, creditts) {

    // count++;
    if (subGrade === "Ex") {
        // result += (10 * creditts);
        return (10 * creditts)
        

    } else if (subGrade === "A") {
        // result += (9 * creditts);
        return (9 * creditts)
    } else if (subGrade === "B") {
        // result += (8 * creditts);
        return (8 * creditts);
        
    } else if (subGrade === "C") {
        // result += (7 * creditts);
        return (7 * creditts)
    } else if (subGrade === "D") {
        // result += (6 * creditts);
        return (6 * creditts)
    }
    else if (subGrade === "E") {
        // result += (6 * creditts);
        return (5 * creditts)
    }
    else if (subGrade === "F") {
        // result += (6 * creditts);
        return 0
    }
    
//    finalResultEl.textContent=result/creddits;
}



buttonEl.onclick=function()
{
    let CloudComputingElGrade = CloudComputingEl.value;
    let CyberSecurityElGrade = CyberSecurityEl.value;
    let RoboticsElGrade= RoboticsEl.value;
    let Project2ElGrade= Project2El.value; 
    let CommunityServiceElGrade= CommunityServiceEl.value; 
    

    

   
    result+=credits(CloudComputingElGrade,3);
    result+=credits(CyberSecurityElGrade,3);
    result+=credits(RoboticsElGrade,3);
    result+=credits(Project2ElGrade,6);
    result+=credits(CommunityServiceElGrade,2);
    

    
    // alert(result/creddits);
    // if(result===0){
    //     finalResultEl.textContent="you failed"
    // }
    finalResultEl.textContent=(result/creddits).toFixed(2);
    result=0;
};
