'use strict'


function get_imprints() {
    fetch("http://scitbb.top:7878/get-imprints", {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': 'http://127.0.0.1:5500'
        })
    })
        .then(res => res.json())
        .then(data => {
            var refined_data;
            if (data == 'error getting imprint') {
                alertBox('error getting imprint');
            }
            else {
                refined_data = data.map(
                    item => {
                        return {
                            "pid": item.pid,
                            "name": item.name,
                            "email": item.email,
                            "message": item.message,
                            "icon": item.icon
                        }
                    }
                )
                console.log("vm.GridData is ", vm.gridData)
                vm.gridData = refined_data;
                console.log("refined data is ", refined_data);
            }
        })
}

function add_imprint(name, email, message, icon) {
    fetch("http://scitbb.top:7878/add-imprint", {
        method: "POST",
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
            "name": name,
            "email": email,
            "message": message,
            "icon": icon
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data == 'error adding imprint') {
                alertBox('error adding imprint');
            }
            else {
                get_imprints();
            }
        })
}