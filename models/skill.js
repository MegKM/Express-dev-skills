const skills = [
    {id: 1, name: 'Python', level: 'Intermediate'},
    {id: 2, name: 'C#', level: 'Beginner'},
    {id: 3, name: 'JavaScript', level: 'Beginner'},
    {id: 4, name: 'HTML', level: 'Intermediate'},
    {id: 5, name: 'CSS', level: 'Beginner'},
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll(){
    return skills
}

function getOne(id){
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill){
    console.log(skill.name)
    skill.id = skills.length + 1;
    skill.level = 'Beginner',
    skills.push(skill)
}

function deleteOne(id){
    id = parseInt(id);
    const index = skills.findIndex(skill => skill.id === id);
    skills.splice(index, 1);
}