var notes = [];
			
			var d = new Date();
			
			function getClockTime(){
			   var now    = new Date();
			   var hour   = now.getHours();
			   var minute = now.getMinutes();
			   var ap = "AM";
			   if (hour   > 11) { ap = "PM";             }
			   if (hour   > 12) { hour = hour - 12;      }
			   if (hour   == 0) { hour = 12;             }
			   if (hour   < 10) { hour   = "0" + hour;   }
			   if (minute < 10) { minute = "0" + minute; }
			   var timeString = hour + ':' + minute + " " + ap;
			   return timeString;
			}

			function confirmDelete(num){
			  var x = confirm("Are you sure you want to delete?");
			  document.getElementById("deleteNote"+num).remove();
			  if (x)
				return true;
			  else
				return false;
			}
			
			function editNote(num){
			  var y = edit("Are you sure you want to delete?");
			  document.getElementById("deleteNote"+num);
			  if (x)
				return true;
			  else
				return false;
			}
			
			var number = 0
			
			function addNote() {

				notes.unshift(document.getElementById("textarea").value);
				document.getElementById('textarea').innerHTML ;
			    document.getElementById("displayNote").innerHTML += '<div id="deleteNote'+number+'" >' + ' ' + getClockTime() + ' ' + d.toDateString() + '<br>' + '<li>'+ ' ' + notes.shift() + '</li>' + 
				'<br>' + '<input id="edit" type="button" class="btn btn-light" value="Edit Note">' + '    ' + '    ' +'<input id="delete" type="button" class="btn btn-light" onclick="confirmDelete('+number+')" value="Delete">' + '</div>';
				number++
			}
