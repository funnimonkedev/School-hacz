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
        
            if (window.location.pathname != '/defense' && window.location.pathname != '/defense2') {
                document.write(';) goodbye webpage, didnt use it on the right directory =)');
            } 
            else {
                let tokens = Number(parseFloat(prompt('How much moolah$$$ do you want?')));
                reactHandler().stateNode.setState({ tokens });
        
                alert('aight bet!');
            };
})();javascript:void 0;
