
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
//todos
var app = new Vue ({
  el: '#app-container',

  data: {
    newTodo: '',
    todos: [
      { body:'Something Here', completed:false }
    ]
  },

  mounted () {

  },

  methods: {
    // Checks if the newTodo is not empty
    // Default the newly added todo to not done.     
    addTodo: function () {
      if(this.newTodo.length) {
        this.todos.push({
          body: this.newTodo,
          completed: false
        });
      }
      this.newTodo = '';
    },
    
    // Uses the index from the v-for on the todos list
    // splice and index is the preffered vuejs way of removing          items     
    removeTodo: function (index) {
      this.todos.splice(index,1);
    }
  },

  computed: {
    
    incompleteTodos() {
      return this.todos.filter(todo => ! todo.completed);
    },

    completedTodos() {
      return this.todos.filter(todo => todo.completed);
    }
  }

});
