---
title: "How to Build your own RC Car with Arduino - ArduCar"
date: "March 24 2021"
excerpt: "Most of us here, write a lot of code and very rarely have any kind of interaction with electronics, which indeed run our codes. Another thing is a common myth that electronics are very difficult to understand and that we need at least an electronic engineer title to get started with it. As a technician, petrolhead and coding enthusiast, Arduino was always somewhere on my list. I also had an RC car when I was a kid and always wanted to buy another one in my adulthood, so now when I have started learning to code, got an Arduino kit, it was the best time to make this childhood dream come true."
cover_image: "/assets/posts/arducar.png"
---

## Electronics and Programming are not that Scary

<br>

Most of us here, write a lot of code and very rarely have any kind of interaction with electronics, which indeed run our codes. Another thing is a common myth that electronics are very difficult to understand and that we need at least an electronic engineer title to get started with it. As a technician, petrolhead and coding enthusiast, Arduino was always somewhere on my list. I also had an RC car when I was a kid and always wanted to buy another one in my adulthood, so now when I have started learning to code, got an Arduino kit, it was the best time to make this childhood dream come true.

<br>

Before and if you proceed to the next part I want to add a few more things. First of all, this is an old article that I have published before on some technical websites related to microcontrollers, so you can treat this one just as a remastered version. This tutorial is heavily based on the technical explanation, however, in the second part of the tutorial, I explain the code written in Arduino IDE. Last but not least, even though ArduCar is my own application written in Java, I have not provided the source code nor an explanation of it in this tutorial.

<br>

## Let's have some fun!

<br>

In this instruction, you will learn how to create an Arduino based RC car from a scratch. No prior programming, Arduino, or electronics experience needed. Even though having some previous experience in those fields can be helpful, everyone should be able to finish this project without any problems. You may also ask, why Power bank? These days, those devices are becoming more and more affordable, in some cases, they are even cheaper than batteries, many of us have them at our own houses, they can be reused, and recharged anytime we want. The project covers the basics principles of creating such a car, with a minimalistic approach on materials, and explains the code in details. Moreover, provided instructions can be also used in different projects, so let's start!

<br>

As a hobbyist, I didn't have many tools like soldering iron etc. So I have tried to make use of some old electronic things such as USB cable or power bank, that most of you may have somewhere at home. You may follow all of my instructions, but feel free to change some parts and be creative. Below, the list of the materials can be found:

<br>

- Arduino UNO

- car chassis, with wheels and motors, kit

- male - male, and female - male jumper wires

- electrical insulation tape

- Bluetooth module (HC-06 or HC-05)

- DC motor controller (L298N)

- Power Bank with 2 USB outputs

- Piezo buzzer

- Android mobile phone

- PC with Arudino IDE installed

- [ArduCar - Arduino RC Car Bluetooth Controller](https://play.google.com/store/apps/details?id=practical.learning.arducar)

<br>

### Step 1: Chassis Assembly

<br>

First of all, we will need to assembly the chassis of our car. If you have a kit, most probably you also got the instructions with it, but just in case the steps can be found below:

<br>

1. Prepare the main part of the chassis, 4 small plastic brackets which will mount motors on the chassis frame (2 for each), screws, brass spacers, nuts, motors, useless USB cable, and 4 cables/ jumper wires.

2. Connect one wire to each pin of a motor, you can solder them but if you don't have soldering iron, just try to "knot" the cables to each pin.

![ArduCar](https://hackster.imgix.net/uploads/attachments/1139529/whatsapp_image_2020-06-12_at_15_18_59_R4J8mmaC1y.jpeg?auto=compress%2Cformat&w=1280&h=960&fit=max)

3. Now take your old/spare USB cable, and cut it so there is around 20 cm of cable left.

4. Strip a few centimetres of cable covering so you can see the cables inside it; there should be 4/5 cables inside, but we are interested just in two cables, GND - black one, and Plus - Red one. Strip 2-4 cm of covering from both red and black cable. You can leave it like that, or to make it stronger just "knot" it or solder with longer, stronger cable/ jumper wires so that the connection is firm enough.

![ArduCar](https://hackster.imgix.net/uploads/attachments/1139530/usb_eaMFOClw95.png?auto=compress%2Cformat&w=1280&h=960&fit=max)

5. Take the motor, and mount it to the chassis frame with plastic brackets (2 for each), using screws and nuts. Please note that, each motor has a small "dot" on one side, and that dot should face inward so that when two motors are on place, these dots face each other.

![ArduCar](https://hackster.imgix.net/uploads/attachments/1139531/whatsapp_image_2020-06-12_at_15_17_23_G96xfqBYqI.jpeg?auto=compress%2Cformat&w=1280&h=960&fit=max)

6. Once the motors are on their place, it is time for the 3rd nylon supporting wheel. When you look at the end of the frame, there should be 4 small holes next to each other, looking like a square shape. Take the brass spacers and mount them to these holes with screws, so brass spacers are on the same side of the frame with motors.

7. Mount the nylon supporting wheel to the brass spacers with screws.

![ArduCar](https://hackster.imgix.net/uploads/attachments/1139532/whatsapp_image_2020-06-12_at_15_20_39_YXLQCoL93B.jpeg?auto=compress%2Cformat&w=680&h=510&fit=max)

8. Install the wheel to each motor. Note that, there is a shape inside of the wheel hub so be sure to put it in the right place. Most probably there will be a huge resistance, but you have to be gentle with it and use some power at the same time.

9. We are almost done with assembling the car, at this point you can install Arduino module and DC motor controller to the frame. I used 3 screws with nuts that were left from the kit and covered wires with electrical insulation tape where it was necessary.

![ArduCar](https://hackster.imgix.net/uploads/attachments/1139534/whatsapp_image_2020-06-12_at_15_21_51_F7zwPdEdr5.jpeg?auto=compress%2Cformat&w=680&h=510&fit=max)

<br>

## Step 2: Wiring

<br>

Once we have our car assembled with both Arduino and DC motor controller onboard, it is time for wiring. Prepare the jumper wires, both male - male and female - male.

<br>

1. Take the cables that are connected to the motors and install them to the DC motor controller. Let's say that lower pins, the ones closer to the ground, are the plus pins, and the ones closer to the frame are minus (GND). The circuit should look like this:

<br>

OUT1 - Left motor (-) GND cable

OUT2 - Left motor (+) cable

OUT3 - Right motor (+) cable

OUT4 - Right motor (-) GND cable

<br>

![ArduCar](https://hackster.imgix.net/uploads/attachments/1139533/whatsapp_image_2020-06-12_at_15_23_26_AZmhprS8lE.jpeg?auto=compress%2Cformat&w=680&h=510&fit=max)

2. Now let's connect Arduino to the DC motor controller, in order to do that, we will use pins with tiny names IN1, IN2, IN3, and IN4. Previous OUT1, 2, 3, 4 sockets were responsible for transferring the power to the electric motors, but with IN1, 2, 3, 4 pins, we will send commands to the controller from our Arduino device. This time you may need female - male wire jumpers, but if you don't have such a wire just try to modify male - male wire jumper or solder the wires to the pins.

<br>

IN1 - DIGITAL 5

IN2 - DIGITAL 6

IN3 - DIGITAL 10

IN4 - DIGITAL 11

<br>

3. Bluetooth module is the last crucial thing we will need for our steering, when you look at the Bluetooth module it should have 4 pins and each pin is signed as follows VCC - POWER, GND - Ground (-), TXD - transfer data, RXD - receive data. Female - male jumper wires may be needed once again this time.

<br>

VCC - POWER 5V

GND - POWER GND

TXD - DIGITAL 0 RXD

RXD - DIGITAL 1 TXD

<br>

As you can see, data will be exchanged between Arduino and our Bluetooth module, that is why data cables are connected in the opposite way.

![ArduCar](https://hackster.imgix.net/uploads/attachments/1139537/whatsapp_image_2020-06-12_at_15_25_37_GGcFam68oc.jpeg?auto=compress%2Cformat&w=680&h=510&fit=max)

4. Piezo buzzer has 2 legs, a longer one, Anode (+), and shorter one Cathode(-). It is recommended to use 330 Ohm resistor between piezo buzzer and Anode because it is a very sensitive and tiny instrument, but I didn't use one, as the resistor makes my piezo buzzer very silent. Note: Female - male wire jumpers may be helpful again.

<br>

Anode(+) long leg - DIGITAL 3

Cathode(-) short leg - POWER GND

<br>

![ArduCar](https://hackster.imgix.net/uploads/attachments/1139538/whatsapp_image_2020-06-12_at_15_25_58_nsTMBhw1qN.jpeg?auto=compress%2Cformat&w=680&h=510&fit=max)

5. We are almost there! Now we need to power our Arduino board and DC motor controller. Take the USB cable part that we have prepared in the previous part and connect those two cables; red and black to DC motor controller.

<br>

Red cable (+) - 12 V

Black cable (-) - GND

<br>

6. The last step is to connect two USB cables, one to Power bank and Arduino board, and other one that connected to the DC motor controller, to Power bank as well. Last thing is to mount your Power bank on the frame, I used an electrical insulation tape to stick it to the frame, but there are many other ways to mount it. Note: some Power banks may have a switch or button on them, so to power the circuit you may need to switch the power on.

![ArduCar](https://hackster.imgix.net/uploads/attachments/1139539/circui_eVJqZaMloV.png?auto=compress%2Cformat&w=680&h=510&fit=max)

7. All of the parts and wiring are on its' place, but still there is no code in Arduino and no application on the mobile phone to control the car.

<br>

## Step 3: Programming

<br>

Now that we have our RC car ready, the last part is to upload the code to the Arduino board and download the application on an Android mobile phone. For this step, you will need the Arduino IDE program on your computer, which can be downloaded from the Arduino official website. Once you have it installed, there are two options that need to be set. Open the Arduino IDE program and you will see a few options on the upper bar, pick "Tools" and then you should see the list, find the option called "Board:" and pick your Arduino board from the list (most of the time it is Arduino UNO). Later, right under the "Board:" option, click on the "Port" option, if there are no USB devices connected to your PC, it may be greyed out/disabled, once you connect your Arduino board with a USB cable this option should become available, you may have to choose one port, for example in my case it is PORT 5. Even though I have 3 USB ports on my laptop, just one of them works as a PORT. You can try with different USB sockets on your computer till it works.

<br>

![ArduCarIDE](https://hackster.imgix.net/uploads/attachments/1139540/arduinoide_xYdgHjA4Mc.png?auto=compress%2Cformat&w=680&h=510&fit=max)

<br>

Before we move on to uploading the code to Arduino, you have two options:

<br>

1. Just download the attached file, open it with Arduino IDE program and simply upload it.

2. Go to Arduino IDE program, click on File - New, copy the code from here, and click on the "Upload" icon. Remember that while uploading your code Arduino board should be connected to your PC via the right USB socket, on which the port is set.

<br>

Note: **While uploading the code to Arduino, DIGITAL 0 RX, DIGITAL 1 TX sockets should be unplugged**, when those sockets are connected to the Bluetooth module, Arduino may not accept the incoming data from your PC and the program may freeze at "uploading" state.

<br>

Below you can find the code with explanations.

3. After uploading the code to the Arduino board, it is time to reconnect DIGITAL 0 RX and DIGITAL 1 TX pins to the Bluetooth module and reconnect the USB cable (Arduino - Power bank) to the Power bank.

4. The last step to make your RC car work, is to download the Android application from Google Play Store, and start having fun! ![ArduCar - Arduino RC Car Bluetooth Controller Android Application](https://play.google.com/store/apps/details?id=practical.learning.arducar) You may also download different applications, as long as they send the matching serial codes, or even create your own mobile application.

![ArduCar](https://hackster.imgix.net/uploads/attachments/1139541/horizontal_zchLc5ullN.jpeg?auto=compress%2Cformat&w=680&h=510&fit=max)

<br>

Thank you for your attention, and wish you have a lot of fun with it. In case of any questions or suggestions, please let me know about it down below in the comments section.

<br>

```

#define in1 5
#define in2 6
#define in3 10
#define in4 11
int state;
int piezo = 3;
void setup() {
  pinMode(in1, OUTPUT);
  pinMode(in2, OUTPUT);
  pinMode(in3, OUTPUT);
  pinMode(in4, OUTPUT);
  pinMode(piezo,OUTPUT);
  Serial.begin(9600);
}
void loop() {
  if (Serial.available() > 0) {
    state = Serial.read();
    Stop();
    switch (state) {
      case 'F':
        forward();
        soundFX(3000.0,30+400*(1+sin(millis()/5000)));
        break;
      case 'G':
        forwardleft();
        soundFX(3000.0,60);
        break;
      case 'D':
        forwardright();
        soundFX(3000.0,60);
        break;
      case 'N':
        backright();
        soundFX(3000.0,30+100*(1+sin(millis()/2500)));
        break;
      case 'C':
        backleft();
        soundFX(3000.0,30+100*(1+sin(millis()/2500)));
        soundFX(3000.0,30+100*(1+sin(millis()/2500)));
        soundFX(3000.0,30+100*(1+sin(millis()/2500)));
        soundFX(3000.0,30+100*(1+sin(millis()/2500)));
        break;
      case 'B':
        back();
        soundFX(3000.0,30+200*(1+sin(millis()/2500)));
        soundFX(3000.0,30+200*(1+sin(millis()/2500)));
        soundFX(3000.0,30+200*(1+sin(millis()/2500)));
        soundFX(3000.0,30+200*(1+sin(millis()/2500)));
        break;
      case 'L':
        left();
        soundFX(3000.0,60);
        soundFX(3000.0,60);
        soundFX(3000.0,60);
        soundFX(3000.0,60);
        break;
      case 'R':
        right();
        soundFX(3000.0,60);
        soundFX(3000.0,60);
        soundFX(3000.0,60);
        soundFX(3000.0,60);
        break;
      case 'H':
        soundFX(3000.0,30+200*(1+sin(millis()/2500)));
        soundFX(3000.0,60);
        soundFX(3000.0,30+200*(1+sin(millis()/2500)));
        soundFX(3000.0,60);
    }

  }
}
void forward() {
  analogWrite(in1, 255);
  analogWrite(in3, 255);
}
void forwardleft() {
  analogWrite(in1, 50);
  analogWrite(in3, 255);
}
void forwardright() {
  analogWrite(in1, 255);
  analogWrite(in3, 50);
}
void back() {
  analogWrite(in2, 255);
  analogWrite(in4, 255);
}
void backright() {
  analogWrite(in2, 50);
  analogWrite(in4, 255);
}
void backleft() {
  analogWrite(in2, 255);
  analogWrite(in4, 50);
}
void left() {
  analogWrite(in4, 255);
  analogWrite(in1, 255);
}
void right() {
  analogWrite(in3, 255);
  analogWrite(in2, 255);
}
void Stop() {
  analogWrite(in1, 0);
  analogWrite(in2, 0);
  analogWrite(in3, 0);
  analogWrite(in4, 0);
}
void soundFX(float amplitude,float period){
 int uDelay=2+amplitude+amplitude*sin(millis()/period);
 for(int i=0;i<5;i++){
   digitalWrite(piezo,HIGH);
   delayMicroseconds(uDelay);
   digitalWrite(piezo,LOW);
   delayMicroseconds(uDelay);
 }
}

```

<br>

## Step 4: Arduino Code Explanation and Bluetooth Module Configuration (Optional)

<br>

For the curious ones, I have decided to add an Arduino code explanation, so it may help some of you understand the mechanics and logic behind this RC car even better. I also want to add that it is not entirely my code, it is very similar to the codes that are available in different projects, I just simplified some parts and added the chunks for the Piezo buzzer sound.

<br>

Arduino IDE program uses a kind of a simplified hybrid version of C and C++ programming languages, so it can remind you of those programming languages if you are familiar with them, but if not it is also OK. The code will be divided into a few chunks to help you understand it better.

<br>

Each Arduino program is composed of two basic parts:

1. `void setup() { }` - where we set a function for each of the Arduino's pin. This is something that is read by the Arduino just once, gets the information, and stores it for the rest part of the program.

In our case it looks like that:

`void setup() {pinMode(in1, OUTPUT);` pinMode means that we will set a mode for the given pin, inside the brackets, there are two values, first one - in1, is the name of the pin that we are referring to, and the second value - OUTPUT means that we will send some data from Arduino to the target. If there is INPUT written, it means that the given pin would receive a data from a sensor etc.

<br>

```

pinMode(in2, OUTPUT);

pinMode(in3, OUTPUT);

pinMode(in4, OUTPUT);

pinMode(piezo, OUTPUT);

```

<br>

`Serial.begin(9600);` Serial is the port that can be used for sending and receiving the data, do you remember those DIGITAL 0 RX and DIGITAL 1 TX pins that we were connecting the Bluetooth module to? It is about their setting. It means that we will open a channel through which data will be exchanged. The number inside the brackets (9600) means that in one second up to 9600 characters can be sent. It is the most frequently used baud rate, as it is the most stable one, the higher the number is, the faster it is, but also more prone to being disturbed by the noise it is. That is why just leave it at 9600. Note: Bluetooth modules are generally set to baud rate 9600 by default, but sometimes you may have to configure it before - check the Bluetooth configuration section.

2. `void loop() { }` - As you can guess from the name, it is the part of the program in which everything written inside the curly brackets, will be repeated again and again. That is all, that is needed for any Arduino program to run. Rest is just your own imagination. Before I move to the details in loop and functions, there is one more part that is located at the beginning of our code, right before `void setup() { }`

3. In the `void setup() { }` part we have named Arduino pins as in and piezo, but those are not their real names, those are just names that we gave them, and the program will always relate to those names while executing the program. Because of that, at the beginning of each Arduino program we can initialize some names for the pins and variables. Let's have a look at our example:

`#define in1 5` When you want to define a name for some pin on the Arduino board you can use `#define` word, and then write the name after space. In our case, it's in1, as it is the name of the DC motor controller pin that we are going to control. The next space is followed by the number of the given pin. In this case, it is 5 as the in1 pin is connected to the socket number 5 on the Arduino board.#define in2 6

<br>

```

#define in3 10

#define in4 11

int state; // We can also initialize names of the pin as variables int (integer), and variables itself.

int piezo = 3;

```

<br>

4. Now let's move back to the loop part.

`void loop() {if (Serial.available() > 0) {` First statement in the loop starts with if, inside the brackets we can see a condition, it says `Serial.available() > 0)` - simply it means, if Serial, in our case Bluetooth module, is available, greater than 0, remember the binary code 1 - true, 0 - false, do the following { } - everything in those curly braces will be executed.

`state = Serial.read();` Remember that state variable at the beginning of the code? This is the time when we assign the value to that variable ( = ) so our state variable now is equal to `Serial.read()`, which means that the variable will change according to what is read from the Bluetooth module.

`Stop();` Those two brackets () after a name indicates that it is a function, and it has to be explained somewhere in the code. The same with this one, the first function to be executed in this code is the function named Stop, which will just literary cut off the power from the wheels and make our RC car stop.

`switch (state)` Right after the Stop function, we have another one, this time it is the global function, that exist in nearly every programming language, and it is called switch - what literary means that there will be few functions inside, and we will just switch between them. This time you can see that inside the brackets () we have a condition, and the condition is a variable called state, which value was assigned to everything that is received from the Bluetooth module.

`case 'F':` As you can see, each possible function inside the switch, will be marked as "case" and in the single quotations we can see the possible value of the state variable. In this case, if the state equals 'F' - such a character is sent to the Bluetooth module via the mobile application, some functions will be executed.

`forward();` The first function to be executed

`soundFX(3000.0, 30+400*(1+sin(millis()/5000)));` The second function to be executed, this time with some conditions inside the brackets.

`break;` break means to stop executing this case, you always have to finish each case with `break;` statement.

<br>

```

case 'G':

forwardleft();

soundFX(3000.0, 60);

break;

```

5. Almost everything is explained now, but there were some functions like forward(), soundFX() etc. in the code, but they were not explained in the void setup() { }, nor in the void loop() { } part of the code. If there are such functions in the code, they should be explained at the end of the code. Below you can see an example.

`void forward()` Again, in order to call a function firstly void should be written, and after a space, name of the function should be written, for example forward(). Inside the curly brackets we can see the explanation of the function.analogWrite(in1, 255); analogWrite means that we are sending a signal, in case we were receiving, it should be written as analogRead. Inside the brackets there are two values (in1 - the name of the pin that we are referring to, and 255 - the value of the electrical wave frequency, that can range from 0 to 255 - 0 means 0%, and 255 means 100%. It can be also written as LOW - 0, HIGH - 255. As you can see, this is the place where you can change the speed of each electric motor.

`analogWrite(in3, 255);` In this way, we can say that by changing pins in1, 2, 3, 4, and values, we can control the side from which the electricity will enter the motors, what will be the voltage, and as a result the speed and direction.

`void soundFX(float amplitude, float period)` This is the part that I have found on Arduino official forums, on the topic of SciFi sounds for the Piezo buzzer. You can find this code in the last post, for further explanations you can go to the link below.

https://forum.arduino.cc/index.php?topic=118757.0

<br>

```

int uDelay=2+amplitude+amplitude*sin(millis()/period);

for(int i=0;i<5;i++){

digitalWrite(piezo, HIGH);

delayMicroseconds(uDelay);

digitalWrite(piezo, LOW);

delayMicroseconds(uDelay);

} }

```

<br>

6. It is how it works. From now on, hopefully you can also make your own contribution to the code, change something, add some new functions, or rewrite it in your own way.

<br>

### Bluetooth Configuration

<br>

At the last, but not least, there is one more important thing to mention. HC-05 and HC-06 Bluetooth modules generally come up with default settings, such as baud rate, name, password etc. But if you would like to configure your Bluetooth module, you can use Arduino IDE program for this purpose. However, you may need to change the pins that Bluetooth module is connected to, and change Arduino code for the configuration time. Moreover, it is recommended to use resistors, in order to protect the Bluetooth module, as the data pins work at 3.3V, while the default output voltage of Arduino is 5V. Please keep all of those things in mind, I won't go throughout the whole process here, but there are plenty of tutorials available, just simply google it. If there are any suggestions, or questions please let me know in the comments' section below.

Thank you for your attention once again, and don't forget to share your own projects below!
