cd backend
terminal: 
  pip install pipenv
  pipenv shell
  pipenv install -r requeriments.txt
  
  
use control + p
press > 
select python interpreter = pipenv

restart terminal

uvicorn main:app --reload

---------------------------------------

cd frontend
npm start
