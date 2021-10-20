```
sudo docker build -t node-test .
```

```
sudo docker run -p 8080:8080 -e PORT=8080 -e dbURI="<your mongo db URI>" <docker build ID>
```