# Generated by Django 4.0 on 2021-12-25 14:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shoping',
            name='image',
            field=models.ImageField(upload_to='media/uploads/'),
        ),
    ]
