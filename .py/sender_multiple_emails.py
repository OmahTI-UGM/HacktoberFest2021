from email.mime.text import MIMEText
import smtplib
server = smtplib.SMTP('smtp.uk.xensource.com')
server.set_debuglevel(1)
message = MIMEText("""Message Body""")
sender = 'mymail@example.com'
recipients = ['tadashi@example.com', 'Peter@example.co.uk', 'Ayesha@example.co.uk']
message['Subject'] = "subject"
message['From'] = sender
message['To'] = ", ".join(recipients)
server.sendmail(sender, recipients, message.as_string())