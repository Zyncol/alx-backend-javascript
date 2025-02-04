import ClassRoom from './0-classroom';

/**
 * Creating an array of ClassRooms with a specific size
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
