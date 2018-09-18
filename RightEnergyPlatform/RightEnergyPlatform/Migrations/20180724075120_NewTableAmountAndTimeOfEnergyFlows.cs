using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace RightEnergyPlatform.Migrations
{
    public partial class NewTableAmountAndTimeOfEnergyFlows : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "UrlAddressNames",
                newName: "CountryName");

            migrationBuilder.AddColumn<int>(
                name: "CountryId",
                table: "UrlAddressNames",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "AmountAndTimeOfEnergyFlows",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CountryId = table.Column<int>(nullable: false),
                    FlowAmount = table.Column<double>(nullable: false),
                    Time = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AmountAndTimeOfEnergyFlows", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AmountAndTimeOfEnergyFlows");

            migrationBuilder.DropColumn(
                name: "CountryId",
                table: "UrlAddressNames");

            migrationBuilder.RenameColumn(
                name: "CountryName",
                table: "UrlAddressNames",
                newName: "Name");
        }
    }
}
