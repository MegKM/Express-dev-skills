const skills = [
    {id: 1, name: 'Python', level: 'Intermediate'},
    {id: 2, name: 'C#', level: 'Beginner'},
    {id: 3, name: 'JavaScript', level: 'Beginner'},
    {id: 4, name: 'HTML', level: 'Intermediate'},
    {id: 5, name: 'CSS', level: 'Beginner'},
]

module.exports = {
    getAll,
    getOne
};

function getAll(){
    return skills
}

function getOne(id){
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}