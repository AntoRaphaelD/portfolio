import pyautogui
import time
def auto_type(text, delay=0):
    time.sleep(1)  # 2-second pause to switch to the target window
    pyautogui.typewrite(text, interval=delay)
# Example usage:
if __name__ == "__main__":
    message = '''
    class Vehicle {
    int regNum;
    Vehicle next;

    public Vehicle(int regNum) {
        this.regNum = regNum;
        this.next = null;
    }
}

class SinglyLinkedList {
    Vehicle head, tail;

    public SinglyLinkedList() {
        head = null;
        tail = null;
    }

    public void add(Vehicle v) {
        if (head == null) {
            head = v;
            tail = v;
        } else {
            tail.next = v;
            tail = v;
        }
    }

    public Vehicle poll() {
        if (head == null) {
            return null;
        }
        Vehicle temp = head;
        head = head.next;
        if (head == null) {
            tail = null;
        }
        temp.next = null;
        return temp;
    }
}

    '''
auto_type(message)