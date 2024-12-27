class persona{
	constructor(lista){
		self.list = lista;
		self.n = lista.length();
		self.fit = Infinity
	}

	mutar(mu){
		if (random() < mu){
			indice1 = random(0,lista.length)
			indice2 = random(0,lista.length)

			self.lista[indice1] , self.lista[indice2] = self.lista[indice2] , self.lista[indice1] 
		}
	}

	cruzar(other){
		start = floor(random(0,other.length-1))
		end = floor(random(start+1,other.length))

		neworder = this.list.slice(start,end);

		for (var i =0; i<other.n; i++){
			city = other.list[i];
			if(!neworder.includes(city)){
				neworder.push(city);
			}
		}

		return neworder




	}

	fitness(){
		suma = 0
		for (var i =0; i<this.n; i++){
			if i == 0{
				suma += this.lista[]
			}
			suma+= 
		}
	}

}