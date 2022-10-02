
// SOHAIB ASLAM  PIAIC 63082  City ISLAMABAD, Air University


// Functionality for Question 1-10 is scripted in following function

function ViewResult() {



    //Question no. 2

    p_name = "Sohaib Aslam"
    document.getElementById("q_2").innerHTML = 
    `<span style='background-color:yellow;'>Q2 = Personal Message:</span> Hello, ${p_name} would you like to learn web 3.0 program by ZIA Khan & Team ?<hr>`;
    
    
    //Question no. 3

    P_name_UPPER = p_name.toUpperCase()
    P_name_LOWER = p_name.toLowerCase()

     //  Title Case conversion function
     function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');
      }

    //  Title Case conversion END
    document.getElementById("q_3").innerHTML = `<span style='background-color:yellow;'>Q3 = Upper, Lower, titleCase:</span> (${P_name_UPPER}),
     (${P_name_LOWER}), (${titleCase("my name is sohaib")}) <hr>`;
    
    
     //Question no. 4


    document.getElementById("q_4").innerHTML = `<span style='background-color:yellow;'>Q4 = Simple quote:</span>
    Zia Khan & Team once said, "You can buy freedom" <hr>`;


    //Question no. 5

    famous_person = "Zia Khan & Team"
    message = "You can buy freedom"
    document.getElementById("q_5").innerHTML = `<span style='background-color:yellow;'>Q5 = Quote with variable:</span>
    ${famous_person} once said "${message}" <hr>`;
    
    
    //Question no. 6

    striped_name = "\tSOHAIB\n"
    name_after_striped = striped_name.trim()
    document.getElementById("q_6").innerHTML = `<span style='background-color:yellow;'>Q6 = whiteSpace and  Striped:</span>"${striped_name}", 
    "${name_after_striped}" <hr>`;


    //Question no. 7 and 8

    a = 5, b = 3, c = 12, d = 4, e = 4, f = 2, g = 32, h = 4
    document.getElementById("q_7_8").innerHTML = `<span style='background-color:yellow;'>
    Q7,8 = addition, subtraction, multiplication, and division: </span>  4+4 = ${a+b}, 12-4 = ${c-d}, 4x2 = ${e*f}, 32/4 = ${g/h}, 
    <u>(Note: Variable used to do oprations)</u> <hr>`;
   
   
    //Question no. 9

    favourite_number = 8
    document.getElementById("q_9").innerHTML = `<span style='background-color:yellow;'>Q9 Favourite Number is:</span>\n "${favourite_number}"
    \n (Stored in variable) <hr>`;


    //Question no. 10

    let my_Name = "M Name is SOHAIB ASLAM";
    var today = new Date();
    // here we are getting today's date from date object
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    document.getElementById("q_10").innerHTML = `<span style='background-color:yellow;'>Q10 = Date and Name:</span> \n
    <br>${my_Name}<br>
    Today's date is : ${today}
    <hr>`;



   //Question no. 11

    Friends_List = ["Sohaib Aslam", "Asad Saeed", "Kamil"]
    document.getElementById("q_11").innerHTML = `<span style='background-color:yellow;'>Q11 = Friends List:</span>\n 1=(${Friends_List[0]}),
    \n 2=(${Friends_List[1]}) \n 3=(${Friends_List[2]}) \n <u>(Note: each name accessed using index from list)</u> <hr>`;
   
   
    //Question no. 12

    greeting_message = "you are selected for PIAIC web 3.0 course"
    document.getElementById("q_12").innerHTML = `<span style='background-color:yellow;'>Q12 = Greeting Message to each :<br></span>
    Greetings! ${Friends_List[0]}   ${greeting_message} 
    <br>Greetings! ${Friends_List[1]}   ${greeting_message} 
    <br>Greetings! ${Friends_List[2]}   ${greeting_message} <hr>`;


    //Question no. 13

    transport_mode = ["I like Audi A3", "Audi A3 has a small structure", "Audi A3 suit's young guys"]
    let transport_st = "";
    for (let i = 0; i < transport_mode.length; i++) {
        transport_st += transport_mode[i] + "<br>";
    }
    document.getElementById("q_13").innerHTML = `<span style='background-color:yellow;'>Q13 = Transport Mode :<br></span>${transport_st} <hr>`;


    //Question no. 14

    

    var Dinner_Guys = ["Zia Khan", "Daniyal Nagori", "Ali Razaq"];
    let dinner_invt = "";
    for (let i = 0; i < Dinner_Guys.length; i++) {
        dinner_invt += "Good day! " + Dinner_Guys[i] + " you are herebely invited for dinner at Meriate hotel at 9:30 PM<br>";
    }
    document.getElementById("q_14").innerHTML = `<span style='background-color:yellow;'>Q14 = Dinner Invitation :<br></span>${dinner_invt}`;


    //Question no. 15 Ali out from dinner

    One_Guy_Out = Dinner_Guys.slice(0,2)
    One_Guy_Out.splice(2,3, "Zeeshan Hanif")
    let dinner_invt_changed = "";
    for (let i = 0; i < One_Guy_Out.length; i++) {
        dinner_invt_changed += "Good day! " + One_Guy_Out[i] + " you are herebely invited for dinner at Meriate hotel at 9:30 PM<br>";
    }
    document.getElementById("q_15").innerHTML = `<span style='background-color:yellow;'>Ali out from Dinner :<br></span>${dinner_invt_changed}
    <br> (Note: Ali Razq can't make it he has an emergency) <hr>`;
   

    // Question no. 16 Zeeshan hanif added to dinner
    Big_Table = One_Guy_Out.slice(0,3)
    Big_Table.splice(2,3, "Sohaib", "Zeeshan Hanif")
    Big_Table.splice(0,1, "Asad", "Zia Khan")
    Big_Table.splice(5,6, "Kamil")
    let bigger_table = "";
    for (let i = 0; i < Big_Table.length; i++) {
        bigger_table += "Good day! " + Big_Table[i] + " you are herebely invited for dinner at Meriate hotel at 9:30 PM<br>";
    }
    document.getElementById("q_16").innerHTML = `<span style='background-color:yellow;'>Q16 = Bigger Table Invitation :<br></span>${bigger_table}
    <br>(Note: We found a bigger diner table, now more space is availabale) <hr>`;  


    
    // Question no. 17

    Bigger_Cancel = Big_Table.slice(0, 2)
    let two_left = "";
    for (let i = 0; i < Bigger_Cancel.length; i++) {
        two_left += "Good day! " + Bigger_Cancel[i] + " you are herebely invited for dinner at Meriate hotel at 9:30 PM<br>";
    }
    document.getElementById("q_17").innerHTML = `<span style='background-color:yellow;'>Q17 = Cancele Bigger Table :<br></span>${two_left}`; 

    Sorry_other = Big_Table.slice(2,6)
    let sorry_others = "";
    for (let i = 0; i < Sorry_other.length; i++) {
        sorry_others += "Unfortunately! " + Sorry_other[i] + " we are sorry, our meetup has been canceled<br>";
    }
    document.getElementById("q_17_1").innerHTML = `<span style='background-color:yellow;'>${sorry_others}</span>
    <br> (Note: My apologies we 2 person can only meet due to some restrictions) <hr>`; 

    // Question no. 18


    Five_Places = [ "Pakistan", "Austrailia", "Canada", "UK", "Saudi Arabia"];
    document.getElementById("q_18").innerHTML = `<span style='background-color:yellow;'>Q18 = 5 Places to Visit :<br></span>${Five_Places} (Original Alphabetically)`;
   
    Five_Places_Sorted = Five_Places.slice(0,5)
    Five_Places_Sorted.sort()
    document.getElementById("q_18_1").innerHTML = `${Five_Places_Sorted} (Sorted List)`;

    //Again print orignal Array
    Five_Places
    document.getElementById("q_18_2").innerHTML = `${Five_Places} (Again Original List)`;

    //Reverse print orignal Array
    Reverse_Places = Five_Places.slice(0,5)
    Reverse_Places.reverse()
    document.getElementById("q_18_2").innerHTML = `${Reverse_Places} (Reverse Original List Printing)`;
   

    //Again sort revrse Array in alphabetically
    Reverse_Places.sort()
    document.getElementById("q_18_3").innerHTML = `${Reverse_Places} (Sort reversed List alphabetically) <hr>`;


    //Question no. 19
    Big_Table
    document.getElementById("q_19").innerHTML = `<span style='background-color:yellow;'>Q19 = Our Dinner Guest :<br></span>1 = ${Big_Table[0]} <br> 2 = ${Big_Table[1]} <br>
    (Note: We have 2 guest for dinner ) <hr>`;


    //Question no. 20
    let cities =[];


        for(var i=0;i<5;i++){
            var city = prompt(`Enter ${i+1} city name`);
            cities.push(city);
        }

        console.log("You enter following cities");
        console.log(cities);


    //Question no. 21


            
        let employee ={
            id:6283,
            name:"SOHAIB",
            Salary:"150K"
        };


        console.log(employee);


    //Question no. 22,
    
    let guests=['SOHAIB','ASLAM','ASAD','SAEED'];

        try {
            guests[7][-4]
        }
        catch(error) {
            console.log(error)
        }
    
    
    //Question  no.23, 
        let AfridiNumber = 10;
        let Score="50";
        
        console.log(AfridiNumber ==10);
        console.log(AfridiNumber ===10);
        console.log(AfridiNumber =='10');
        console.log(AfridiNumber ==20-10);
        console.log(AfridiNumber ===5*2);
        
        console.log(Score == 60-{AfridiNumber});
        console.log(AfridiNumber ==='10');
        console.log(AfridiNumber ==20+1);
        console.log(Score === 60-10);
        console.log(Score == AfridiNumber);


    //Question no.24

    let todayy="sat"
    let todayDate=1;
    let color = "White";
    const fruitss = ["Banana", "Orange", "Apple", "Mango"];


    console.log(todayDate ===1);
    console.log(todayDate ==='1');

    console.log(todayy === today.toLowerCase());

    console.log(todayy >2);

    console.log(todayy <2);
    console.log(todayDate =='1');

    console.log(todayy <2|| todayDate =='1');
    console.log(todayy <2|| todayDate ==='1');

    console.log(todayy=="sat" && todayDate =='1');
    console.log(todayy =="sat" && todayDate ==='1');


    console.log(fruitss.includes("Mango"));
    console.log(fruitss.includes("grapes"));


    //Question no. 25

    alien_color = "Green";
    if (alien_color == 'Green') {
        document.getElementById("q_25").innerHTML = `<span style='background-color:yellow;'>Q25 = Alien Color if else statement :<br></span>
        <br> Alien_color = "Green";<br>
        Congratulations! You have earned 25 points<br> (If statement executed)<hr>`;
    }
    else {

        document.getElementById("q_25").innerHTML = `<span style='background-color:yellow;'>Q25 = Alien Color if else statement :<br></span>
        Empty Result<br> (else statement executed)<hr>`
    }


  

    //Question no. 26

    alien_color = "Brown";
    if (alien_color == 'Green') {
        document.getElementById("q_26").innerHTML = `<span style='background-color:yellow;'>Q26 = Alien Color if else Block :<br></span>
        <br> Alien_color = "Brown";<br>
        Congratulations! You have just earned 10 points to shoot an alien<br> (If statement executed)<hr>`;
    }
    else {
        document.getElementById("q_26").innerHTML = `<span style='background-color:yellow;'>Q26 = Alien Color if else Block :<br></span>
        <br> Alien_color = "Brown";<br>
        Player earned 10 points<br> (else statement executed)<hr>`
    }
        

    var a = 5;
    var b = 6;
    var c = 11;
    equal = a == b;
    not_equal = a!=b;
    greater = a > b;
    less_then = a < b;
    equal_less = a <= b;
    d_type = a === b;
    and = a > 10 && a < 15;
    or_op = a < 10 || a > 3;
    document.getElementById("q_23_24").innerHTML = `<span style='background-color:yellow;'>Q22, 23 & 24 = Conditional Test :<br></span>
    <br> a = 5; <br> b = 6;<br> c = 11;<br><br> a == b = ${equal}<br> a !=b  = ${not_equal}<br>a > b = ${greater}<br>
    a < b = ${less_then}<br>a <= b = ${equal_less}<br>a === b  = ${d_type}<br> a > 10 && a < 20 = ${d_type}<br>
     a < 10 || a < 3 = ${or_op}<hr>`;



    //Question no. 27

    alien_color = "Red";
    if (alien_color == 'yellow'){
        document.getElementById("q_27").innerHTML = `<span style='background-color:yellow;'>Q27 = Alien Color Yellow/Red/Green :<br></span>
        <br> Alien_color = "Yellow";<br>
        Congratulations! You have just earned 5 points because alien is red<br> (If statement executed)<hr>`;
    } 
    else if (alien_color == 'Red'){
        
        document.getElementById("q_27").innerHTML = `<span style='background-color:yellow;'>Q27 = if else chain statement :<br></span>
        <br> Alien_color = "Red";<br>
        Player earned 15 points<br> (else if statement executed)<hr>`
    }

    else {
        
        document.getElementById("q_27").innerHTML = `<span style='background-color:yellow;'>Q27 = Alien Color if else chain statement :<br></span>
        <br> Alien_color = "Green";<br>
        Player earned 10 points<br> (else statement executed)<hr>`
    }


    //Question no. 28
    Age = "13";

    if (Age == '2'){
        document.getElementById("q_28").innerHTML = `<span style='background-color:yellow;'>Q28 = Person Stage of Life :<br></span>
        <br> Age < 2 ;<br> person is baby<hr>`;
    } 
    else if (Age == '2' && Age < '4'){
        
        document.getElementById("q_28").innerHTML = `<span style='background-color:yellow;'>Q28 = Person Stage of Life :<br></span>
        <br> Age == 2 but < 4;<br> person is toddler<hr>`
    }
    else if (Age == '4' && Age < '13'){
        
        document.getElementById("q_28").innerHTML = `<span style='background-color:yellow;'>Q28 = Person Stage of Life :<br></span>
        <br> Age == 4 but < 13;<br> person is Kid<hr>`
    }
    else if (Age == '13' && Age < '20'){
        
        document.getElementById("q_28").innerHTML = `<span style='background-color:yellow;'>Q28 = Person Stage of Life :<br></span>
        <br> Age == 13 but < 20;<br> person is teenager<hr>`
    }
    else if (Age == '20' && Age < '60'){
        
        document.getElementById("q_28").innerHTML = `<span style='background-color:yellow;'>Q28 = Person Stage of Life :<br></span>
        <br> Age == 20 but < 60;<br> person is adult<hr>`
    }
    else {
        
        document.getElementById("q_28").innerHTML = `<span style='background-color:yellow;'>Q28 = Person Stage of Life :<br></span>
        <br> Age == 65 OR > 65;<br> person is Elder<hr>`
    }
    

    //Question no. 29
    fruits = ["Mangoe", "Apple", "Cheeku"];
    if ( fruits[0] == "Grapes" ){
        document.getElementById("q_29").innerHTML = `<span style='background-color:yellow;'>Q29 = Fruit Finder :</span><br>[${fruits}]
        <br> oh! you like Grapes<hr>`
    }

    else if ( fruits[1] = "Mangoe" ){
        document.getElementById("q_29").innerHTML = `<span style='background-color:yellow;'>Q29 = Fruit Finder :</span><br>[${fruits}]
        <br> oh! you like Mangoe<hr>`
    }

    else if (fruits[2] = "cheeku" ){
        document.getElementById("q_29").innerHTML = `<span style='background-color:yellow;'>Q29 = Fruit Finder :</span><br>[${fruits}]
        <br> oh! you like Cheeku<hr>`
    }

    else {
        document.getElementById("q_29").innerHTML = `<span style='background-color:yellow;'>Q29 = Fruit Finder :</span><br>[${fruits}]
        <br> Fruit not found<hr>`
    }

    // Question no. 29 right one by Usman COO

            let favorite_fruits = ["Apple", "banana","pear"];


        if(favorite_fruits.includes("Apple")){
            console.log(`You really like ${favorite_fruits[0]}`);
        }

        if(favorite_fruits[1] =='banana'){
            console.log(`You really like ${favorite_fruits[1]}`);
        }
        if(favorite_fruits[1] !== favorite_fruits[2] ){
            console.log(`You really like ${favorite_fruits[1]}`);
        }
        if(favorite_fruits.includes("Apple") && favorite_fruits.includes("pear"))
        {
            console.log(`You really like ${favorite_fruits[0]} & ${favorite_fruits[2]}`);
        }
        if(favorite_fruits.includes("Apple") || favorite_fruits.includes("mango"))
        {
            console.log(`You really like ${favorite_fruits[0]}`);
        }

    //Question 30


        
    let users=["alex","Luke","Bob","tony","Admin","Mike"];

    for(var i=0; i< users.length; i++){
        if(users[i]==="Admin"){
            console.log(` Hello ${users[i]}, would you like to see a status report?`);
        }
        else{
            console.log(`Hello ${users[i]}, thank you for logging in again.`);
        }
    }


    // var account_user = ['admin', 'sohaib', 'user'];
    // let user_login = "";

    
    // for (let i = 0; i < account_user.length; i++) {
    
    //     user_login += "Good day! " + account_user[i] + " welcome back to system<br>";
    // }


    // if (user_login != ''){
    //     document.getElementById("q_30").innerHTML = `<span style='background-color:yellow;'>Q30, 31, 32 = User Login System :</span>
    //     <br>${user_login}<br> (Note: user availaable in array)<hr>`
    // }
    // else{
    //     document.getElementById("q_30").innerHTML = `<span style='background-color:yellow;'>Q30 = No user availabale :</span>
    //     <br> Please! Add user to array <hr>`
    // }

    // var account_user = [];
    // let my_users = "";

    
    // for (let i = 0; i < account_user.length; i++) {
    
    //     my_users += "Good day! " + account_user[i] + " welcome back to system<br>";
    // }


    // if (my_users != ''){
    //     document.getElementById("q_30_1").innerHTML = `<br>${my_users}<br> (Note: user availaable in array)`
    // }
    // else{
    //     document.getElementById("q_30_1").innerHTML = `<span style='background-color:yellow;'>While no user availabale :</span>
    //     <br> Please! Add user to array <hr>`
    // }


    //Question no. 31
    let userss=[];

        if(userss.length >0){
            for(var i=0; i< userss.length; i++){
                if(userss[i]==="Admin"){
                    console.log(` Hello ${userss[i]}, would you like to see a status report?`);
                }
                else{
                    console.log(`Hello ${userss[i]}, thank you for logging in again.`);
                }
            }
        }
        else{
            console.log(`We need to find some users!`);
        }


    // Question 32

        let  current_users=["alex","Luke","Bob","tony","Admin","Mike"];

    let new_users=["jira","LUKE","bob","naty","bunty"];


    for(var i= 0; i<new_users.length; i++){
        let counter=0;
        for(var j=0;j<current_users.length; j++)
        {
        if(new_users[i].toLowerCase()=== current_users[j].toLocaleLowerCase()){
            console.log(`${new_users[i]} will need to enter a new username.`)
            counter=counter+1;
        }
        }
        if(counter ===0){
            console.log(`${new_users[i]}the username is available.`)
        }
    }


    //Question 33

    //right one by Usman coo
    let number = [1,2,3,4,5,6,7,8,9];

    for(var i = 0; i < number.length; i++){

        if(number[i]==1){
            console.log(`${number[i]}st`);
        }
        else if(number[i]==2){
            console.log(`${number[i]}nd`);
        }
        else if(number[i]==3){
            console.log(`${number[i]}rd`);
        }
        else if(number[i]>=4 && number[i] <=9){
            console.log(`${number[i]}th`);
        }
    }


    // var ordinal_numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    // var ordinal_mean = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th']
    // let ordinal_nums = "";
    // let ordinal_meaning = "";

    
    // for (let i = 0; i < ordinal_numbers.length; i++)

    //         ordinal_nums += ordinal_numbers[i] + "<br>";
     
        
    // for (let i = 0; i < ordinal_mean.length; i++)

    // ordinal_meaning += ordinal_mean[i] + "<br>";

    
    //     document.getElementById("q_31").innerHTML = `<span style='background-color:yellow;'>Q33 = Ordinal Numbers :</span><br>
    //     ${ordinal_nums}:  ${ordinal_meaning}<br><hr>`
 
 

    //Question 34

    let pizzas =["Veggie Pizza", "Pepperoni Pizza","BBQ Chicken Pizza"];


    for(var i=0; i<pizzas.length;i++){
        console.log(pizzas[i]);
    }


    for(var i=0; i<pizzas.length;i++){
        console.log(` I like  ${pizzas[i]}`);
    }

    console.log(`I love pizza so much, 
    it's one of the best in fast food with full of  nutritions. `);


    //mine one
    var fvrt_pizza = ["Fajita", "Tikka", "pepperoni"];
    let pizza = "";

    
    for (let i = 0; i < fvrt_pizza.length; i++) {
    
        pizza +=  + fvrt_pizza[i] + "<br>";
    }

    var pizza_lines = ["fajita is one of my favourite", "Tikka pizza has a different taste according to texture", "pepperoni is full of souce and wet"]
    let pizza_liner = "";

    for (let i = 0; i < pizza_lines.length; i++) {
    
        pizza_liner += "Good day! " + pizza_lines[i] + "<br>";
    }


    document.getElementById("q_32").innerHTML = `<span style='background-color:yellow;'>Q34 = Favourite Pizza :</span><br>
    I like chicken fajita pizza, with full of chicken and chese. Soucage are plus<br>
    ${fvrt_pizza} : ${pizza_liner}<hr>`


    //Question 35 
    var animals = ["Cat", "Dog", "Tiger"];
    let anima = "";


    for (let i = 0; i < animals.length; i++) {
    
        anima +=  + animals[i] + "<br>";
    }

    document.getElementById("q_33").innerHTML = `<span style='background-color:yellow;'>Q35 = Favourite Pet :</span><br>
    <br> These 3 animal has same specie, all of them can be a good choice as a home pet, Main charecrtristic is no one harm 
    to human beign if he is trained<hr>`


    //Both could be use
        let animals =["dog",'cat',"parrort"];

    for(var i=0;i< animals.length; i++){
        console.log(animals[i]);
    }



    for(var i=0;i< animals.length; i++){
        console.log(`${animals[i]} is a good pet`);
    }

    console.log(`${animals[0]} is a loyal pet`);
    console.log(`${animals[1]} is a funny pet`);
    console.log(`${animals[2]} is a beautyful pet`);





    //Question 36


    
    function make_shirt(sizeOfShirt,message){

        console.log(`size of your shirt is: ${sizeOfShirt}`);
        console.log(`message: ${message}`);
        }
        
        make_shirt(15,"Hello world");


        //Both code can use
    const person = {
        fullName: function(shirtSize, message) {
          return +"First Name"+ this.firstName + "<br>Last Name: " + this.lastName + "<br>Shirt Size" + shirtSize + "<br> Message:" + message;
        }
      }
      
      const person1 = {
        firstName:"SOHAIB",
        lastName: "ASLAM"
      }
      
    

      document.getElementById("q_34").innerHTML = `<span style='background-color:yellow;'>Q36 = T-Shirt size and Message Function :</span><br>
      ${person.fullName.call(person1, "32-36-34", "I love Pakistan (my message for pakistan")}<hr>`


         
      //Question 37


      
    function make_shirt(sizeOfShirt ="Large",message="I love JavaScript"){

        console.log(`size of your shirt is: ${sizeOfShirt}`);
        console.log(`message: ${message}`);
        }
        
        make_shirt();
        make_shirt("medium");

        make_shirt("extra large","Hello world");

        //Both could be use

        const shirt = {
            fullName: function(shirtSize, message) {
            return +"First Name"+ this.firstName + "<br>Last Name: " + this.lastName + "<br>Shirt Size" + shirtSize + "<br> Message:" + message;
            }
        }
      
      const shirt1 = {
        firstName:"SOHAIB",
        lastName: "ASLAM"
      }
      
    

      document.getElementById("q_35").innerHTML = `<span style='background-color:yellow;'>Q37 = T-Shirt full size Demand Function :</span><br>
      ${shirt.fullName.call(shirt1, "40-38-42", "I love JS  kindly made ful size large shirts")}<hr>`





      //Question 38


      function describe_city(city, country="Pakistan"){
        console.log(`${city} is in ${country}`);
        }
        
        describe_city("Karachi");
        describe_city("Lahore");
        describe_city('London',"UK");



        //Both could be use
      function CityCountry(city, country) {
        return city +","+ country;
      }
      
    

      document.getElementById("q_36").innerHTML = `<span style='background-color:yellow;'>Q38, 39 = Write city using function params :</span><br>
      ${CityCountry("Lahore", "Pakistan")}<hr>`


    //Question 39

    function city_country(city,country){

        return`${city}, ${country}`;
    }
    var firstcall = city_country("Islamabad","Pakistan");
    console.log(firstcall);
    var secondcall =city_country("Karachi","Pakistan");
    console.log(secondcall);
    var thirscall = city_country("Peshawar","Pakistan");
    console.log(thirscall);
    

      
      //Question 40


     //Right one by Usman COO 
    function make_album(artistName, albumTitle, trackNumbers){

        let obj={
            artistName : {artistName},
            albumTitle: {albumTitle},
        };

        if(trackNumbers != 'undefined')
        {
            obj.trackNumbers={trackNumbers};
        }

        return obj;

    }


        var firstObj =make_album("Atif","Dori");
        console.log(firstObj);

        var secObj =make_album("AliZafar","Chano",5);
        console.log(secObj);

        var thirdObj =make_album("Mustafa Zahid","Chano",2);
        console.log(thirdObj);


//Mine one need to reset or delete
      albumObject = "";
      function album(artist, title) {
        return albumObject = artist +","+ title;
      }


      
    

      document.getElementById("q_37").innerHTML = `<span style='background-color:yellow;'>Q40 = Album Object Function :</span><br>
      ${album("NFA", "Jana Unka")}<hr>`




    //Question 41

      //More efficient by Usman coo
        var magiciansNames = [ 'alex', 'BOB', 'DUde' ]; 


        function show_magicians(magicians) {
        for (i=0; i<magicians.length; i++) {
            console.log(magicians[i]);
        }
        }

        show_magicians(magiciansNames);

            albumObject = "";
            function album(names) {
                return  names;
            }


    
    //non efficient
    Mag_names = ["Zia Khan", "Daniyal Nagori", "Ali Razzaq"]
    document.getElementById("q_38").innerHTML = `<span style='background-color:yellow;'>Q42 = The Magecian Name Function :</span><br>
    ${album(Mag_names)}<hr>`



    //Question 42

    //console wala 
    var magiciansNames = [ 'alex', 'BOB', 'DUde' ]; 

        function make_great(magicians){

        let greatMagicians =[];
        for (i=0; i<magicians.length; i++) {
            greatMagicians.push(`Great ${magicians[i]}`);
        }
        return greatMagicians;
        }

        magiciansNames = make_great(magiciansNames);

        function show_magicians(magicians) {
        for (i=0; i<magicians.length; i++) {
            console.log(magicians[i]);
        }
        }

        show_magicians(magiciansNames);

    albumObject = "";
    function album(great, names) {
        return greaties =  great + names;
    }


    //Not right just for html page    
    Mag_names = ["Zia Khan", "Daniyal Nagori", "Ali Razzaq"]
    The_great = "The Great "
    document.getElementById("q_38").innerHTML = `<span style='background-color:yellow;'>Q43 = The Magecian Great Addition Function :</span><br>
    ${album(The_great + Mag_names)}<hr>`




              //Question 43

    //Need to understand this
              var magiciansNames = [ 'alex', 'BOB', 'DUde' ]; 

                function make_great(magicians){

                let greatMagicians =[];
                for (i=0; i<magicians.length; i++) {
                    greatMagicians.push(`Great ${magicians[i]}`);
                }
                return greatMagicians;
                }

                let greatMagicians = make_great(magiciansNames);

                function show_magicians(magicians, greatMag) {
                for (i=0; i<magicians.length; i++) {
                    console.log(`${magicians[i]},  ${greatMag[i]}`);
                }
                }

                show_magicians(magiciansNames, greatMagicians);



                //just for html page not efficient code
              const shisandwichrt = {
                fullName: function(name) {
                  return   "Customer: " +name +"<br>"+"Sandvich Type: "+ this.sandvich_Type + "<br> Souce" + this.souce_Quantity+ "<br> Bread" + this.breadType+ "<br> Chicken" + this.chicken+ "<br> Salad" + this.Salad; 
                }
              }
              
              const shisandwichrt1 = {
                sandvich_Type:"Subway",
                souce_Quantity: "Normal",
                breadType: "Seasmi",
                chicken: "Tikka",
                Salad: "Full",
              }
              
            
        
              document.getElementById("q_39").innerHTML = `<span style='background-color:yellow;'>Q44 , 45 = T-Shirt full size Demand Function :</span><br>
              ${shisandwichrt.fullName.call(shisandwichrt1, "SOHAIB ASLAM")}<hr>`


//Question no. 44


    function Sandwitch(...items){
        console.log(items);
    }


    Sandwitch("bread", 'cheez','patato','egg');

    Sandwitch("menu", 'ketchup');

    Sandwitch("Onion", 'cheez','egg');



    // Question 45

    
        function carInfo(manufacturer , model, feature){

            let car ={
                manufacturer:{manufacturer},
                model:{model},
                feature:{feature}
            };

            return car;
        }


        var firstCall = carInfo("Honda","2022",'white');
        console.log(firstCall);

        var secCall = carInfo("Toyota","2020",'Black');
        console.log(secCall);

        var thirdCall = carInfo("Suzuki","2020");
        console.log(thirdCall);



        // Completed, code chunks has been added from Usman ashraf code

}
