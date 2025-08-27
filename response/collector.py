
import datetime

def collect_log(event="Test Event"):
    with open("forensic_logs.txt", "a") as f:
        f.write(f"{datetime.datetime.now()} - {event}\n")

if __name__ == "__main__":
    collect_log("Incident Response System Initialized")
