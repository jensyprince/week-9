function Person(name, job, age) {
    this.name = name
    this.job = job
    this.age = age
    this.exercise = function(){
        console.log("Running is fun! - said no one ever")
    }
    this.fetchJob = function(){
        console.log(`${this.name} is a ${this.job}`)
    }
}
function Programmer(name, job, age, languages) {
    Person.call(this, name, job, age)
    this.languages = [languages]
    this.busy = true
    this.completeTask = function(){
        this.busy = false
    }
    this.acceptNewTask = function(){
        this.busy = true
    }
    this.offerNewTask = function(){
        if(this.busy){
            console.log(`${this.name} can't accept any new tasks right now`)
        } 
        else{
            console.log(`${this.name} would love to take on a new responsibility`)
        }
    }
    this.learnLanguage = function(language){
        this.languages.push(language)
    }
    this.listLanguages = function(){
        console.log(this.languages)
    }
}


const Jensy = new Person("Jensy", "Construction worker", "18")

Jensy.exercise()

const Jay = new Programmer("Jensy", "Construction worker", "18", "spanish")



Jensy.fetchJob()
Jay.exercise()
Jay.completeTask()
Jay.offerNewTask()
Jay.listLanguages()
Jay.learnLanguage("English")
Jay.listLanguages()

