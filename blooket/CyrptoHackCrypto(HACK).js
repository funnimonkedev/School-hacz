javascript:
(async () => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();
            function reactHandler() {
                return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
            };
        
            if (window.location.pathname != '/play/hack') {
                alert('You must be in a crypto hack game mode to use this hack!');
            } else {
                let amount = Number(parseFloat(prompt('How much crypto do you want?')));
                reactHandler().stateNode.setState({ crypto2: amount, crypto: amount });
        
                alert('Crypto added!');
            };
})();javascript:void 0;
