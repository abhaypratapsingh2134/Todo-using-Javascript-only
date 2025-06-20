let todo=[];
let req=prompt("Enter your choice: ");
 while(true){
    if(req=="Quit"){
        console.log("quitting app");
        break;
    }

    if(req=="View"){
        console.log("--------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("--------------");
    }

    else if(req=="Add"){
        let task=prompt("please enter the task to add");
        todo.push(task);
        console.log("task added");
       
    }
    else if(req=="Delete"){
        let idx=prompt("Enter the index of todo to delete");
        todo.splice(idx,1);
        console.log("Deleted");
    }
    else{
        console.log("Wrong request");
    }
     req=prompt("Enter your Choice:");
 }