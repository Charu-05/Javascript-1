//1. University Admission Eligibility Checker
//Inputs: 12th grade marks, entrance exam score, stream ("Science", "Commerce", "Arts").
//Rules:
//Science → Min 75% in 12th and 80% in entrance.
//Commerce → Min 65% in 12th and 70% in entrance.
//Arts → Min 50% in 12th or 60% in entrance.
//Nested inside each stream check:If student has sports quota, reduce marks requirement by 5%.

let grade12thmark = 70;
let entrancemark = 80;
let stream = "science";
let sportsquota = true;

if (stream == "science") {
  if (grade12thmark >= 75 && entrancemark >= 80) {
    console.log("You are eligible for science stream admission");
  } else {
    console.log("You are eligible for science stream admission");
  }
  if (sportsquota == true) {
    console.log("Student has sports quota, reduce marks requirement by 5%");
  } else {
    console.log("Don't have sports quota");
  }
} else if (stream == "commerce") {
  if (grade12thmark >= 65 && entrancemark >= 70) {
    console.log("You are eligible for commerce stream admission");
  } else {
    console.log("You are eligible for commerce stream admission");
  }
  if (sportsquota == true) {
    console.log("Student has sports quota, reduce marks requirement by 5%");
  } else {
    console.log("Don't have sports quota");
  }
} else if (stream == "arts") {
  if (grade12thmark >= 65 && entrancemark >= 70) {
    console.log("You are eligible for arts stream admission");
  } else {
    console.log("You are eligible for arts stream admission");
  }
  if (sportsquota == true) {
    console.log("Student has sports quota, reduce marks requirement by 5%");
  } else {
    console.log("Don't have sports quota");
  }
} else {
  console.log("Invalid stream");
}

// 2. ATM Cash Withdrawal Simulation
//Inputs: Account type ("Savings", "Current"), balance, withdrawal amount, day of the week.
//Rules:
//Savings: Min balance after withdrawal should be ₹1,000.
//Current: Min balance after withdrawal should be ₹5,000.
//On Sunday, ATM service charge is ₹50 extra.
//Use nested if for account + day check.

let accounttype = "Current";
let amount = 6000;
let withdrawal = 800;
let days = "sunday";
if (accounttype == "Savings") {
  if ((balance = [amount - withdrawal] >= 1000)) {
    remain = [amount - withdrawal];
    console.log("You have suficient balance. You have balance:" + " " + remain);
  } else {
    console.log("You don't have suficient balance");
  }
} else if (accounttype == "Current") {
  if ((balance = [amount - withdrawal] >= 5000)) {
    remain = [amount - withdrawal];
    console.log("You have suficient balance. You have balance:" + " " + remain);
  } else {
    console.log("You don't have suficient balance");
  }
} else {
  console.log("Don't have account");
}
if (days == "sunday") {
  remain = [amount - withdrawal - 50];
  console.log(
    "ATM service charges is extra RS.50 for sunday. So, your balance:" +
      " " +
      remain
  );
} else {
  remain = [amount - withdrawal];
  console.log("You don't have any extra charge. Your balance:" + " " + remain);
}

//3. Hospital Bed Allocation
//Inputs: Patient condition ("Critical", "Serious", "Stable"), age, insurance type ("Premium", "Basic", "None").
//Rules:Critical → ICU (if age > 60, priority bed).
//Serious → Special Ward (if insurance is Premium, private room).
//Stable → General Ward (if Basic insurance, semi-private room).
//Nested inside condition checks.

let condition = "critical";
let ages = 60;
let insurancetype = "premium";
if (condition == "critical") {
  if (ages > 60) {
    console.log("Admitted in ICU. Arrange the Priority bed immediately");
  } else {
    console.log("Admited in Icu");
  }
} else if (condition == "serious")
  if (condition == "premium") {
    console.log("Admitted in Special ward. Shift to Private room immediately");
  } else {
    console.log("Admited in Special ward");
  }
else if (condition == "stable")
  if (condition == "basic") {
    console.log(
      "Admitted in General ward. Shift to Semi private room immediately"
    );
  } else {
    console.log("Admited in General ward");
  }

//4. Online Exam Authentication
//Inputs: Login time, face scan status (pass/fail), internet speed.
//Rules:
//If login time is before exam start:
//If face scan passed and speed > 1 Mbps → Allow.
//Else → Reject.
//If login is after start time:
//Allow only if < 10 min late and face scan passed
let logintime = "before";
let facescan = "pass";
let netspeed = "0.5mbps";
let late = "9mins";

if (logintime == "before") {
  if (facescan == "pass") {
    console.log("You are completed face scan. Then move to next step");
    if (netspeed > "1mbps") {
      console.log("You HAVE adequate network. So,you are allowed.");
    } else {
      console.log("You didn't have adequate network. So, you are rejeced");
    }
  } else {
    console.log("You are failed in face scan.");
  }
} else {
  if (late < "10mins") {
    console.log("you passed face scan");
    if (netspeed > "1mbps") {
      console.log("You are allow.");
    } else {
      console.log("Your are reject");
    }
  } else {
    console.log("You are too late. So you failed in face scan");
  }
}

//5. Travel Fare Calculator (Switch + Nested If)
//Inputs: Transport mode ("Bus", "Train", "Flight"), distance, seat class.
//Rules:
//Bus:
//<100 km → ₹5/km
//≥100 km → ₹4/km
//Train:
//General → ₹2/km
//Sleeper → ₹3/km
//AC → ₹5/km
//Flight:
//Economy → ₹8/km
//Business → ₹15/km
//Use switch for transport mode and nested if for pricing.
let transport = "Bus";
let distance = 400;
let seatclass = "sleeper";
let type = "economy";

switch (transport) {
  case "Bus":
    console.log("Travelling in bus");
    if (distance < 100) {
      fare = [distance * 5];
      console.log("You fare is RS.5/km. Then total fare is Rs:" + fare);
    } else {
      fare = [distance * 4];
      console.log("You fare is RS.4/km. Then total fare is Rs:" + fare);
    }
    break;
  case "Train":
    console.log("Travelling in train");
    if (seatclass == "general") {
      fare = [distance * 2];
      console.log(
        "You are applied general class. So, fare is RS.2/km. Then total fare is Rs:" +
          fare
      );
    }
    if (seatclass == "sleeper") {
      fare = [distance * 3];
      console.log(
        "You are applied sleeper class. So, fare is RS.3/km. Then total fare is Rs:" +
          fare
      );
    }
    if (seatclass == "AC") {
      fare = [distance * 5];
      console.log(
        "You are applied AC coach. So, fare is RS.5/km. Then total fare is Rs:" +
          fare
      );
    }
    break;
  case "Flight":
    console.log("Travelling in Flight");
    if (type == "economy") {
      fare = [distance * 5];
      console.log("You fare is RS.8/km. Then total fare is Rs:" + fare);
    } else {
      fare = [distance * 4];
      console.log("You fare is RS.15/km. Then total fare is Rs:" + fare);
    }
    break;
  default:
    console.log("Invalid transport mode");
}

//6. Advanced Electricity Bill Calculator
//Inputs: Units consumed, connection type ("Domestic", "Commercial").
//Domestic:
//0–100 units → ₹3/unit
//101–300 → ₹4/unit
//300 → ₹5/unit
//Commercial:
//0–200 units → ₹5/unit
//201–500 → ₹6/unit
//500 → ₹8/unit
//Use nested if for slab calculation and switch for connection type.

let connectiontype = "Domestic";
let units = 500;

switch (connectiontype) {
  case "Domestic":
    console.log("connection type is Domestic");
    if (units <= 100 && units >= 0) {
      fare = [units * 0];
      console.log("You EB bill is Rs.3/unit total is Rs:" + fare);
    }
    if (units <= 300 && units >= 101) {
      fare = [units * 4];
      console.log("You Eb bill is Rs.4/unit total is Rs:" + fare);
    }
    if (units > 300) {
      fare = [(units - 100) * 5];
      console.log("You Eb bill is Rs.5/unit total is Rs:" + fare);
    }
    break;
  case "Commercial":
    console.log("connection type is Commercial");
    if (units <= 200 && units >= 0) {
      fare = [units * 5];
      console.log("You EB bill is Rs.5/unit total is Rs:" + fare);
    }
    if (units <= 500 && units >= 201) {
      fare = [units * 6];
      console.log("You Eb  bill is Rs.6/unit total is Rs:" + fare);
    }
    if (units > 500) {
      fare = [units * 8];
      console.log("You Eb bill is Rs8/unit total is Rs:" + fare);
    }
    break;
  default:
    console.log("Error");
}

//7. Cinema Ticket Price Calculation
//Inputs: Movie type ("2D", "3D", "IMAX"), time of day ("Morning", "Evening", "Night"), age.
//Rules:
//Kids (<12) → 50% discount
//Seniors (>60) → 30% discount
//Evening shows have +₹50 surcharge.
//Switch for movie type base price, nested if for age/time adjustments.

let movietype = "3D";
let time = "evening";
let age = 30;

switch (movietype) {
  case "2D":
    console.log("You choose 2D movie");
    if (age < 12) {
      console.log("You have 50% discount.");
    }
    if (age > 60) {
      console.log("You have 50% discount.");
    }
    if (time == "evening") {
      console.log("Evening shows have +₹50 surcharge.");
    } else {
      console.log("Don't have any extra charge");
    }
    break;
  case "3D":
    console.log("You choose 2D movie");
    if (age < 12) {
      console.log("You have 50% discount.");
    }
    if (age > 60) {
      console.log("You have 50% discount.");
    }
    if (time == "evening") {
      console.log("Evening shows have +₹50 surcharge.");
    } else {
      console.log("Don't have any extra charge");
    }
    break;
  case "IMAX":
    console.log("You choose 2D movie");
    if (age < 12) {
      console.log("You have 50% discount.");
    }
    if (age > 60) {
      console.log("You have 50% discount.");
    }
    if (time == "evening") {
      console.log("Evening shows have +₹50 surcharge.");
    } else {
      console.log("Don't have any extra charge");
    }
    break;
  default:
    console.log("Invalid movie type. Please select valid type");
}

//8. Restaurant Billing with Membership
//Inputs: Bill amount, membership type ("Gold", "Silver", "None"), day of week.
//Gold → 20% discount, Silver → 10% discount.
//On weekends, Gold gets free dessert, Silver gets 5% extra discount.
//Use nested if + switch for membership

let billamount = 20000;
let membership = "Gold";
let day = "sunday";

switch (membership) {
  case "Gold":
    discount = [billamount * (20 / 100)];
    bill = [[billamount] - [billamount * (20 / 100)]];
    console.log("Gold has 20% discount.");
    console.log("Discount amount is Rs." + discount + ".");
    console.log("Your bills is Rs:" + bill);
    if (day == "sunday") {
      console.log("Gold gets free dessert");
    }
    break;
  case "Silver":
    if (day == "sunday") {
      discount = [billamount * (15 / 100)];
      bill = [[billamount] - [billamount * (15 / 100)]];
      console.log("Silver has 10% discount.");
      console.log("For sunday extra 5% discount");
      console.log("Discount amount is Rs." + discount + ".");
      console.log("Your bills is Rs:" + bill);
    } else {
      discount = [billamount * (10 / 100)];
      bill = [[billamount] - [billamount * (10 / 100)]];
      console.log("Silver has 10% discount.");
      console.log("Discount amount is Rs." + discount + ".");
      console.log("Your bills is Rs:" + bill);
    }
  case "None":
    bill = billamount;
    console.log("Your bill is Rs:" + bill);
    break;
  default:
    console.log(Error);
}

//9. Employee Bonus Allocation
//Inputs: Department ("IT", "HR", "Sales"), years of service, performance rating (1–5).
//Rules:
//IT → 10% bonus if years > 5 and rating ≥ 4.
//HR → 8% bonus if years > 3 and rating ≥ 3.
//Sales → 15% bonus if years > 2 and rating ≥ 4, else 5%.
//Switch for department, nested if for service & rating.

let department = "HR";
let years = 4;
let rating = 5;

switch (department) {
  case "IT":
    if (years > 5 && rating >= 4) {
      console.log("Company give 10% bonus to employees");
    } else {
      console.log("This year you didn't have bonus");
    }
    break;
  case "HR":
    if (years > 3 && rating >= 3) {
      console.log("Company give 10% bonus to employees");
    } else {
      console.log("This year you didn't have bonus");
    }
    break;
  case "Sales":
    if (years > 2 && rating >= 4) {
      console.log("Company give 15% bonus to employees");
    } else {
      console.log("Company give 5% bonus to employees");
    }
    break;
  default:
    console.log("Invalid department");
}

//10. Weather-Based Outfit Advisor
//Inputs: Temperature, weather condition ("Sunny", "Rainy", "Snowy", "Cloudy"),
//activity ("Work", "Sports", "Casual").Switch for weather:
//Sunny → If temp > 30 → light clothes, else normal.
//Rainy → Raincoat + waterproof shoes.
//Snowy → Jacket + gloves.
//Cloudy → Light jacket.
//Nested inside each for activity-based suggestions.

let temperature = "";
let weather_condition = "";
let activity = "";

switch (weather_condition) {
  case "Sunny":
    if (temperature > 30) {
      console.log("Wear light clothes");
    } else {
      console.log("Wear normal clothes");
    }
    break;
  case "Rainy":
    console.log("Wear raincoat + Waterproof shoes");
    break;
  case "Snowy":
    console.log("Wear Jacket+gloves");
    break;
  case "Cloudy":
    console.log("Wear Light Jacket");
    break;
  default:
    console.log("Invalid weather_condition");
}
