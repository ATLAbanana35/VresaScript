#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define _CRT_SECURE_NO_WARNINGS

int main(int argc, char* argv[]) {
    // Vérifier si le nombre correct d'arguments en ligne de commande est fourni
    if (argc != 3 || strcmp(argv[1], "-f") != 0) {
        printf("Usage: terminal_executor -f <nom_du_fichier>\n");
        return 1;
    }

    // Récupérer le nom du fichier C à exécuter à partir des arguments en ligne de commande
    const char* fichierC = argv[2];

    // Commande de compilation pour créer un exécutable à partir du fichier C
    char commandeCompilation[100];
    sprintf(commandeCompilation, "gcc -o tmp_executable %s", fichierC);

    // Commande pour exécuter l'exécutable
    const char* commandeExecution = "tmp_executable";

    // Compiler le fichier C en utilisant la commande de compilation
    int resultatCompilation = system(commandeCompilation);

    if (resultatCompilation != 0) {
        printf("Erreur lors de la compilation du fichier C.\n");
        return 1;
    }

    // Exécuter l'exécutable créé à partir du fichier C
    int resultatExecution = system(commandeExecution);

    if (resultatExecution != 0) {
        printf("Erreur lors de l'exécution du fichier C.\n");
        return 1;
    }
    system("del executable.exe");
    return 0;
}
