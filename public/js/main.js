'use strict'

Vue.component('demo-grid', {
    template:
        `<div class="forms">
            <div class="forms-child"  v-for="
                entry in data
                // | filterBy filterKey
                | orderBy sortKey sortOrders[sortKey]">

                <div class="forms-grand-child" id="post-left-part">
                    <img :src="entry['icon']" id="post-avator" width="50" height="50" >

                    <div id="post-pid">
                    No. {{entry['pid']}}
                    </div>

                    <div id="post-name">
                    {{entry['name']}}
                    </div>

                    <div id="post-email">
                    {{entry['email']}}
                    </div>
                </div>

                <div class="forms-grand-child" id="post-right-part">
                    

                    <div id="post-message">
                    {{entry['message']}}
                    </div>
                </div>
            </div>
        </div>`
    ,
    props: {
        data: Array,
        columns: Array,
        // filterKey: String
    },
    data: function () {
        var sortOrders = {}
        this.columns.forEach(function (key) {
            sortOrders[key] = 1
        })
        return {
            sortKey: '',
            sortOrders: sortOrders
        }
    },
    methods: {
        sortBy: function (key) {
            this.sortKey = key
            this.sortOrders[key] = this.sortOrders[key] * -1
        }
    }
})

var vm = new Vue({
    el: '#demo',
    data: {
        searchQuery: '',
        gridColumns: ['pid', 'name', 'email', 'icon', 'message'],
        gridData: [
            {
                'pid': 1,
                'name': 'John',
                'email': 'sc24.zju@qq.com',
                'icon': 'https://s2.loli.net/2022/01/27/3ZhHSlarG5s9iAu.jpg',
                'message': 'Hello World'
            },
            {
                'pid': 2,
                'name': 'Jack',
                'email': '220@gmail.com',
                'icon': 'https://hibikilogy.github.io/favicon.png',
                'message': 'Hello World~'
            }
        ]
    }
})

get_imprints();

const submitButtom = document.querySelector('#submit');
const submitName = document.querySelector('#post-sub-name');
const submitIcon = document.querySelector('#post-sub-icon');
const submitEmail = document.querySelector('#post-sub-email');
const submitMessage = document.querySelector('#post-sub-message');

submitButtom.onclick = () => {
    let submit_name = submitName.value;
    let submit_icon = submitIcon.value;
    let submit_email = submitEmail.value;
    let submit_message = submitMessage.value;

    // if empty of any of them
    if (submit_name == '' || submit_email == '' || submit_message == '') {
        alertBox('Please fill in all the necessary blanks.');
        return;
    }

    submit_name = submit_name.substring(0, 25);
    submit_icon = submit_icon.substring(0, 100);
    submit_email = submit_email.substring(0, 50);
    submit_message = submit_message.substring(0, 250);

    add_imprint(submit_name, submit_email, submit_message, submit_icon);
}   