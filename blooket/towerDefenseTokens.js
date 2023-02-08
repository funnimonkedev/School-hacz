javascript:
(async () => {
            function reactHandler() {
                return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
            };
        
            if (window.location.pathname != '/defense') {
                alert('This cheat only works in the tower defense mode')
            } else {
                let tokens = Number(parseFloat(prompt('How much $ do you want?')));
                reactHandler().stateNode.setState({ tokens });
                alert("aight bet");
            };
})();javascript:void 0;
