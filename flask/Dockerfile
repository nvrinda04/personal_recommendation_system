# Use a Python image that supports TF 2.13
FROM python:3.11.6-slim

# Set workdir
WORKDIR /app

# Copy requirements and install
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy the rest of the app
COPY . .

# Expose port for Render
EXPOSE 10000

# Start the Flask app
CMD ["gunicorn", "app:app", "-b", "0.0.0.0:10000"]
