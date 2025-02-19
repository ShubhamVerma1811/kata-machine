import PriorityQueue from "@code/PriorityQueue"; // Assuming the implementation is in this file

describe("PriorityQueue with Binary Heap", () => {
  let pq: PriorityQueue;

  beforeEach(() => {
    pq = new PriorityQueue();
  });

  describe("extractMax", () => {
    it("should extract maximum element from the queue", () => {
      // Arrange
      const inputArray = [4, 2, 8, 16, 24, 2, 6, 5];
      for (const num of inputArray) {
        pq.insert(num);
      }

      // Act
      const maxElement = pq.extractMax();

      // Assert
      expect(maxElement).toBe(24);
      expect(pq.toArray()).toEqual([16, 8, 6, 5, 2, 2, 4]);
    });

    it("should extract maximum element from another input", () => {
      // Arrange
      const inputArray = [64, 12, 8, 48, 5];
      for (const num of inputArray) {
        pq.insert(num);
      }

      // Act
      const maxElement = pq.extractMax();

      // Assert
      expect(maxElement).toBe(64);
      expect(pq.toArray()).toEqual([48, 12, 8, 5]);
    });

    it("should maintain heap property after extraction", () => {
      // Arrange
      const inputArray = [10, 20, 30, 40, 50];
      for (const num of inputArray) {
        pq.insert(num);
      }

      // Act
      const maxElement = pq.extractMax();

      // Assert
      expect(maxElement).toBe(50);
      expect(pq.peek()).toBe(40);
    });

    it("should throw error when extracting from empty queue", () => {
      // Act & Assert
      expect(() => pq.extractMax()).toThrow("Priority queue is empty");
    });
  });
});
