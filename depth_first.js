
let users = {}

function add_rel(user, follower){
    if(!users.hasOwnProperty(user)){
        users[user] = []
    }
    if(!users.hasOwnProperty(follower)){
        users[follower] = []
    }
    users[user].push(follower)
}

add_rel("a", 'b')
add_rel("a", 'c')
add_rel("b", 'd')
add_rel("b", 'e')

add_rel("c", 'f')
add_rel("c", 'g')

add_rel("f", 'da')

function dfs(users, start, end){
    console.log(users)
    const explored = new Set()
    if(!users[start]) return null;

    const frontier = [start]

    while(frontier.length > 0){
        const curr = frontier.pop()
        if(curr[0] === end[0]) return curr;

        let currFollowers = users[curr]
        for(const user of currFollowers){
            if(!explored.has(user)) frontier.push(user)
        }
        explored.add(curr)
    }

    return null
}
console.log(dfs(users, 'a', 'e'))
module.exports = {
    users
}