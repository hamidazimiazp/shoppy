# Generated by Django 4.2.8 on 2023-12-15 11:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_sub', models.BooleanField(default=False)),
                ('title', models.CharField(max_length=120)),
                ('slug', models.CharField(max_length=120)),
                ('sub_category', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='category', to='shop.category')),
            ],
            options={
                'verbose_name': 'Category',
                'verbose_name_plural': 'Categories',
                'ordering': ('title',),
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('slug', models.CharField(max_length=120)),
                ('price', models.DecimalField(decimal_places=2, max_digits=6)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='products/%Y/%m/%d/')),
                ('count', models.SmallIntegerField()),
                ('status', models.CharField(choices=[('draft', 'Draft'), ('available', 'Available'), ('done', 'Done')], default='available', max_length=20)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='shop', to='shop.category')),
            ],
            options={
                'ordering': ('title',),
            },
        ),
    ]