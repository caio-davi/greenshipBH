FROM python:3.6-slim-stretch

ADD requirements.txt requirements.txt

RUN apt-get update && \
    apt-get install -y \
        build-essential \
        make \
        gcc \
        locales \
        libgdal20 libgdal-dev && \
    python -m pip install numpy cython --no-binary numpy,cython && \
    python -m pip install \
        "rasterio>=1.0a12"  \
        --pre --no-binary rasterio && \
    python -m pip install -r requirements.txt && \
    python -m pip uninstall -y cython && \
    rm -r /root/.cache/pip && \
    apt-get remove -y --purge libgdal-dev make gcc build-essential && \
    apt-get autoremove -y && \
    rm -rf /var/lib/apt/lists/*

RUN pip install flask flask_json flask_cors requests pymongo 

RUN dpkg-reconfigure locales && \
    locale-gen C.UTF-8 && \
    /usr/sbin/update-locale LANG=C.UTF-8

ENV LC_ALL C.UTF-8

WORKDIR /source
COPY . .
ENV FLASK_APP app.py
ENV FLASK_ENV development
EXPOSE 5000


CMD ["python", "-m", "flask", "run", "--host=0.0.0.0"]