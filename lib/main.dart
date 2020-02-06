import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'models/item.dart';

void main() => runApp(App());

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    Map<int, Color> color = {
      50: Color.fromRGBO(218, 41, 28, .1),
      100: Color.fromRGBO(218, 41, 28, .2),
      200: Color.fromRGBO(218, 41, 28, .3),
      300: Color.fromRGBO(218, 41, 28, .4),
      400: Color.fromRGBO(218, 41, 28, .5),
      500: Color.fromRGBO(218, 41, 28, .6),
      600: Color.fromRGBO(218, 41, 28, .7),
      700: Color.fromRGBO(218, 41, 28, .8),
      800: Color.fromRGBO(218, 41, 28, .9),
      900: Color.fromRGBO(218, 41, 28, 1),
    };
    MaterialColor colorCustom = MaterialColor(0xFFda291c, color);
    return MaterialApp(
      title: 'É comigo Seuandré!',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: colorCustom,
      ),
      home: HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  var items = new List<Item>();

  HomePage() {
    items = [];
    // items.add(Item(title: "Acordar", done: false));
    // items.add(Item(title: "Escovar os dentes", done: true));
    // items.add(Item(title: "Tomar café", done: false));
  }

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  var newTaskCtrl = TextEditingController();

  void add() {
    if (newTaskCtrl.text.isEmpty) return;

    setState(() {
      widget.items.add(Item(
        title: newTaskCtrl.text,
        done: false,
      ));
      newTaskCtrl.clear();
      save();
    });
  }

  void remove(int index) {
    setState(() {
      widget.items.removeAt(index);
      save();
    });
  }

  Future load() async {
    var prefs = await SharedPreferences.getInstance();
    var data = prefs.getString('data');
    if (data != null) {
      Iterable decoded = jsonDecode(data);
      List<Item> result = decoded.map((x) => Item.fromJson(x)).toList();
      setState(() {
        widget.items = result;
      });
    }
  }

  save() async {
    var prefs = await SharedPreferences.getInstance();
    await prefs.setString('data', jsonEncode(widget.items));
  }

  _HomePageState() {
    load();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: TextFormField(
          controller: newTaskCtrl,
          keyboardType: TextInputType.text,
          style: TextStyle(
            color: Colors.white,
            fontSize: 24,
          ),
          decoration: InputDecoration(
              labelText: "Lista de Tarefas",
              labelStyle: TextStyle(color: Colors.white)),
        ),
      ),
      body: ListView.builder(
        itemCount: widget.items.length,
        itemBuilder: (BuildContext ctxt, int index) {
          final item = widget.items[index];

          return Dismissible(
            key: Key(item.title),
            child: CheckboxListTile(
              title: Text(item.title),
              value: item.done,
              onChanged: (value) {
                setState(() {
                  item.done = value;
                  save();
                });
              },
            ),
            background: Container(
              color: Colors.red.withOpacity(0.2),
              child: Text("Excluir"),
            ),
            onDismissed: (direction) {
              // if (direction == DismissDirection.endToStart)
              // print(direction);
              remove(index);
            },
          );
          // return CheckboxListTile(
          //   title: Text(item.title),
          //   key: Key(item.title),
          //   value: item.done,
          //   onChanged: (value) {
          //     setState(() {
          //       item.done = value;
          //     });
          //   },
          // );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: add,
        child: Icon(Icons.add),
        backgroundColor: Colors.pink,
      ),
    );
  }
}
