import tkinter as tk
from tkinter import Entry, Label, PhotoImage

def submit():
    # Retrieve the user input from the Entry widgets
    input1 = entry1.get()
    input2 = entry2.get()
    input3 = entry3.get()

    # You can process the input data as needed
    print("Input 1:", input1)
    print("Input 2:", input2)
    print("Input 3:", input3)

# Create the main application window
root = tk.Tk()
root.title("Green Speed")

# Load the logo image
logo_image = PhotoImage(file="Green Speed - White Bg.png")  # Logo File Source

# Create and pack the logo image
logo_label = tk.Label(root, image=logo_image)
logo_label.pack()

# Create and pack the header label
header_label = tk.Label(root, text="Welcome!", font='Futura')
header_label_2 = tk.Label(root, text="Fill in the Following Fields.", font='Futura')
header_label.pack()
header_label_2.pack()

# Create and pack the Entry widgets and labels for string inputs
label1 = Label(root, text="From:", font='Futura')
label1.pack()
entry1 = Entry(root)
entry1.pack()

label2 = Label(root, text="To:", font='Futura')
label2.pack()
entry2 = Entry(root)
entry2.pack()

label3 = Label(root, text="Time:", font='Futura')
label3.pack()
entry3 = Entry(root)
entry3.pack()

# Create and pack a Submit button
submit_button = tk.Button(root, text="LET'S GO!",font='Futura', command=submit)
submit_button.pack()

# Start the main event loop
root.mainloop()
