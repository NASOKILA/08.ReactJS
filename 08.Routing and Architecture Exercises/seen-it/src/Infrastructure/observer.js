
let subscriptions = {
    'loginUser': []
};

export default {
    events: {
        loginUser: 'loginUser'
    },

    subscribe: (eventName, func) => subscriptions[eventName].push(func),

    trigger: (eventName, data) => subscriptions[eventName].forEach(fn => fn(data))
}