import 'dart:math';

import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  var rand = Random();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Animated Container'),
        ),
        body: Center(
            child: GestureDetector(
          onTap: () {
            setState(() {});
          },
          child: AnimatedContainer(
            duration: Duration(seconds: 1),
            color: Color.fromARGB(
                255, rand.nextInt(256), rand.nextInt(256), rand.nextInt(256)),
            width: 50.0 + rand.nextInt(101),
            height: 50.0 + rand.nextInt(101),
          ),
        )),
      ),
    );
  }
}
