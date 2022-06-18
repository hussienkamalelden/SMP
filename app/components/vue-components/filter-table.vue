<template>
    <div>
        <form class="form-holder" id="search">
            <input class="search-bar" name="filter" v-on:keyup="Search(Message)" v-model="Message" placeholder="Search">
            <input class="clear-btn" type="reset" value="Clear" v-on:click="Reset()">
        </form>
    </div>
</template>

<script>
import Vue from 'vue';

//Functions ..
let Highlight = function (query) {
    if (query != null) {
        let queryReg = new RegExp(query, 'i');

        //Check employee names
        document.querySelectorAll('.employee-name').forEach(function (el) {
            if (queryReg.test(el.textContent)) {
                el.innerHTML = el.textContent.replace(queryReg, '<span class="highlight">$&</span>');
            }
        });
        //Check employee address
        document.querySelectorAll('.employee-address').forEach(function (el) {
            if (queryReg.test(el.textContent)) {
                el.innerHTML = el.textContent.replace(queryReg, '<span class="highlight">$&</span>');
            }
        });
        //Check employee About
        document.querySelectorAll('.employee-about').forEach(function (el) {
            if (queryReg.test(el.textContent)) {
                el.innerHTML = el.textContent.replace(queryReg, '<span class="highlight">$&</span>');
            }
        });
    }
}

let ClearHighlight = function () {
    //give all highlighted elements white background
    document.querySelectorAll('.highlight').forEach(function (el) {
        el.style.backgroundColor = "white";
        el.style.color = "#445065";
    });
}

export default {
    name: "filterTable",
    components: {
    },
    data() {
        return {
            Message: ''
        }
    },
    methods: {
        Search: function (query) {
            ClearHighlight();
            Highlight(query);
        },
        Reset: function () {
            ClearHighlight();
            window.history.pushState({}, document.title, window.location.pathname);

        }
    },
    mounted() {
        window.addEventListener("load", function (event) {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const filterQuery = urlParams.get('filter')
            setTimeout(() => {
                Highlight(filterQuery);
            }, 1000)
        })
    }
};

</script>