﻿// <auto-generated />
using System;
using ExamenLenguajes2.API.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace ExamenLenguajes2.API.Migrations.Examen2Logs
{
    [DbContext(typeof(Examen2LogsContext))]
    [Migration("20241116021748_init")]
    partial class init
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("ExamenLenguajes2.API.Database.Entities.LogEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier")
                        .HasColumnName("id");

                    b.Property<string>("Action")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("action");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2")
                        .HasColumnName("date");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("description");

                    b.Property<string>("User")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("user");

                    b.HasKey("Id");

                    b.ToTable("logs", "dbo");
                });
#pragma warning restore 612, 618
        }
    }
}