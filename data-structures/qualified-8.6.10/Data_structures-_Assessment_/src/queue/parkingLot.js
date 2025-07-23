const Queue = require("../queue/queue");

/**
 * Implement a Parking Lot.
 *
 */
class ParkingLot {
  constructor(capacity, rate) {
    this.spaces = new Array(capacity).fill("vacant");
    this.rate = rate;
    this.revenue = 0;
    this.queue = new Queue();
  }

  /**
   * Returns the number of vacant parking spaces
   * @returns {Number}
   *  the total number of spaces where the value is "vacant".
   */

  get vacantSpaces() {
    return this.spaces.reduce(
      (sum, space, index) => sum + (space === "vacant" ? 1 : 0),
      0
    );
  }

  /**
   * As cars enter the parking lot, the license plate number is entered and the car is parked in the first vacant space.
   * If the lot is full, the car is added to the queue to be parked when a spot is available.
   *
   * @param licensePlateNumber
   *  the license plate number of the car entering
   */
  enter(licensePlateNumber) {
    // If there's room, park in the first vacant spot
    if (this.vacantSpaces > 0) {
      const idx = this.spaces.findIndex(s => s === "vacant");
      this.spaces[idx] = licensePlateNumber;
    } else {
      // Otherwise join the waiting line
      this.queue.enqueue(licensePlateNumber);
    }
  }

  /**
   * As a car leaves the parking lot, or the queue, the leave method is called with the license plate number of the car leaving.
   * @param licensePlateNumber
   *    *  the license plate number of the car leaving.
   */
  leave(licensePlateNumber) {
    // Did they have a parked spot?
    const idx = this.spaces.findIndex(s => s === licensePlateNumber);
    if (idx !== -1) {
      // Free their spot and collect the rate
      this.spaces[idx] = "vacant";
      this.revenue += this.rate;

      // If someone’s waiting, park them in this freed spot
      if (!this.queue.isEmpty()) {
        const nextCar = this.queue.dequeue();
        this.spaces[idx] = nextCar;
      }
    } else {
      // Otherwise, maybe they were still waiting in line—remove them
      const remaining = [];
      while (!this.queue.isEmpty()) {
        const car = this.queue.dequeue();
        if (car !== licensePlateNumber) remaining.push(car);
      }
      // restore everyone who’s still waiting
      for (const car of remaining) {
        this.queue.enqueue(car);
      }
    }
  }

  /**
   * Lists each space in the parking lot along with the license plate number of the car parked there, or
   * "vacant" as the license plate if the spot is vacant.
   * @returns {{licensePlateNumber: string, space: Number}[]}
   */
  get occupants() {
    return this.spaces.map((licensePlateNumber, index) => ({
      space: index + 1,
      licensePlateNumber,
    }));
  }

  /**
   * The total cumulative revenue for the parking lot. The parking rate is paid when the car leaves, it does not matter how long the car stays in the spot.
   * @returns {number}
   *  the total revenue for the parking lot.
   */
  get totalRevenue() {
    return this.revenue;
  }
}

module.exports = ParkingLot;
