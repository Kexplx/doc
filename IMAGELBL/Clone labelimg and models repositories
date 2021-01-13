Clone labelimg and models repositories
	git clone https://github.com/tzutalin/labelImg.git
	git clone https://github.com/tensorflow/models.git

Install miniconda
	https://docs.conda.io/projects/conda/en/latest/user-guide/install/windows.html

Open the anaconda prompt

Create and change into anaconda environment
	conda create -n trump python=3.6
	conda activate trump

Install Packages
	conda install pyqt=5
	conda install -c anaconda lxml
	pip install tensorflow==1.15.0
	conda install pandas
	conda install pillow

Change into models/research
	python setup.py build
	python setup.py install



https://www.youtube.com/watch?v=C5-SEZ_IvaM

python generate_tfrecord.py --csv_input=data/test_labels.csv --output_path=data/test.record --image_dir=images/
python generate_tfrecord.py --csv_input=data/train_labels.csv --output_path=data/train.record --image_dir=images/