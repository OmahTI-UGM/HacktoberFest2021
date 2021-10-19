from tkinter import *
import pywhatkit
from tkinter import messagebox
import time

root = Tk()
root.title("Whatsapp")
root.geometry('405x350')
root.configure(bg='#2B547E')
root.resizable(width=0, height=0)

label = Label(root, text="Kirim Pesan Whatsapp Otomatis", font="bold", width=40, fg="white", bg="black", padx=10, pady=13)
label.grid(row=0, columnspan=3, padx=10, pady=10)
label.place(x=10, y=10)

# form 1
label = Label(root, text="Nomor WA: Format[+]", font=10, fg="white", bg="black")
label.grid(row=1, padx=10, pady=10)
label.place(x=10, y=90)

number_str = StringVar()

entry1 = (Entry(root, width=30, textvariable=number_str, bd=6, font=14, borderwidth=6))
entry1.insert(0, "+")
entry1.grid(row=1, column=1, columnspan=1, padx=10, pady=13)
entry1.place(x=10, y=120)

# Function
def KirimPesan():
  try:
    nomorWA = entry1.get()
    pesan = entry2.get()
    waktu = int(entry3.get())
    waktu2 = int(entry4.get())
    pywhatkit.sendwhatmsg(nomorWA, pesan, waktu, waktu2)
  except:
    messagebox.showerror("Error", "Harap isi semua bidangnya!")

label = Label(root, text="Pesan", font=20, fg="white", bg="black")
label.grid(row=1, padx=10, pady=10)
label.place(x=10, y=170)
message_str = StringVar()
entry2 = (Entry(root, width=41, textvariable=message_str, bd=6, font=14, borderwidth=6))
entry2.insert(0, "Tulis pesan kamu disini...")
entry2.grid(row=1, column=1, columnspan=1, padx=10, pady=13)
entry2.place(x=10, y=200)

label = Label(root, text="Format waktu: 24 jam", font=20, fg="white", bg="black")
label.grid(row=1, padx=10, pady=10)
label.place(x=10, y=240)


label4 = Label(root, font=20, fg="white", bg="black")
label4.grid(row=1, padx=10, pady=10)
label4.place(x=220, y=240)


def JamLokal():
   t = time.localtime()
   current_time = time.strftime("%H:%M:%S", t)
   label4.config(text="Jam: "+current_time)
   label4.after(200, JamLokal)


JamLokal()

entry3 = (Entry(root, width=20))
entry3.insert(0, "Jam")
entry3.grid(row=1, column=1, columnspan=1, padx=5, pady=13)
entry3.place(x=15, y=280)

entry4 = (Entry(root, width=20))
entry4.insert(0, "Menit")
entry4.grid(row=1, column=1, columnspan=1, padx=5, pady=13)
entry4.place(x=150, y=280)

send = Button(root, font="30", width=40, text="Kirim", fg="green", bg="black", command=KirimPesan)
send.grid(row=3, column=1, padx=10, pady=10)
send.place(x=15, y=310)

root.mainloop()
