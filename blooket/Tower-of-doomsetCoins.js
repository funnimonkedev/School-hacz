javascript:(async () => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();
            function reactHandler() {
                return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
            };
        
            if (window.location.pathname == '/tower/battle' || window.location.pathname == '/tower/start' || window.location.pathname == '/tower/shop') {
                try {
                    reactHandler().stateNode.props.setTowerCoins(Number(parseFloat(prompt('How many coins do you want?'))));
                    alert('weener added! ;)')
                } catch { }
            } else {
                document.write("BE IN TOWER OF DOOM NOW");
            };
})();javascript:void 0;
