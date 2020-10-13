
  
      // Send the PUT request.
      $.ajax("/api//" + id, {
        type: "PUT",
        data: newSleepState
      }).then(
        function() {
          console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var neworder = {
        name: $("#ca").val().trim(),
       
      };
  
      // Send the POST request.
      $.ajax("/api/config", {
        type: "POST",
        data: neworder
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".add").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/config/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted cat", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    app.delete("/api/config", (req, res) =>{
        connection.query("DELETE FROM guesas  WHERE id = ?", [req.params.id], (err, dat)=>{
           if (err){
               return res.status(500).end();
           }
           res.joson({
               error:false,
               data:null,
               message: "succes eating burger"
           })
        })
       })