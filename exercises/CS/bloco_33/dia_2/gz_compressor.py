import gzip

class GzCompressor():
    def __init__(self, filepath='./'):
        self.filepath = filepath

    def compress(self, file_name):
        with open(file_name, 'rb') as content:
            with gzip.open(file_name + '.gz', 'wb') as gzip_file:
                gzip_file.writelines(content)   