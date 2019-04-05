"use strict";
function FamilyCtrl() {  
    const controller = this;
    controller.fam = [{
        name: 'Hannah',
        relation: 'Me',
        age: '27'
    },
    {
        name: 'Josh',
        relation: 'Brother',
        age: '30'
        
        
    },
    {
        name: 'Nate',
        relation: 'Brother',
        age: '32'
        
        
    }];
    
    
}

//fam is a part of the controller object
//command shift p reindent lines
angular
.module("App")
.controller("FamilyCtrl", FamilyCtrl);