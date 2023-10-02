# Volume of a Cuboid

## Description

This JavaScript code defines a class named `Kata` with a static method, `getVolumeOfCuboid`, that calculates the volume of a cuboid (rectangular box) using its length, width, and height.

### How It Works

- The `Kata` class contains a static method, `getVolumeOfCuboid`, which takes three parameters: `length`, `width`, and `height`.

- The method calculates the volume of the cuboid by multiplying these three parameters together.

- It returns the calculated volume as a number.

## Usage

To use the `getVolumeOfCuboid` method, provide the length, width, and height of the cuboid as parameters, and it will return the volume of the cuboid.

```javascript
const cuboidLength = 5;
const cuboidWidth = 3;
const cuboidHeight = 2;
const volume = Kata.getVolumeOfCuboid(cuboidLength, cuboidWidth, cuboidHeight);
console.log(volume); // This will log '30' to the console.
