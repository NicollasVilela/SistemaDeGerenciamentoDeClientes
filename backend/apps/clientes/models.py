from django.db import models

class Cliente(models.Model):
    nome = models.CharField(max_length=120)
    email = models.EmailField(unique=True)
    telefone = models.CharField(max_length=20)
    empresa = models.CharField(max_length=120)

    def __str__(self):
        return self.nome
